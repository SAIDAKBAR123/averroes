import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { Z_STREAM_ERROR } from 'zlib'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
    ],
    loadedUserPosts:[],
    loadedEvents:[],
    user: null,
    loading: false,
    error: null,
    task:0
  },

  mutations: {
    setLoadedEvents(state, payload){
      state.loadedEvents=payload
    },
    createEvent(state,payload){
      state.loadedEvents.push(payload)
    },
    setLoadedMeetups (state, payload){
      state.loadedMeetups=payload
    },
    setLoadedUserPost (state, payload){
      state.loadedUserPosts=payload
    },
    createMeetup(state, payload){
      state.loadedMeetups.push(payload)
    } ,
    setUser(state,payload){
      state.user=payload
    },
    setLoading(state,payload){
      state.loading=payload
    },
    setError(state,payload){
      state.error=payload
    },
    setTask(state,payload){
      state.task=payload
    },
    clearError(state){
      state.error=null

    },
    updateMeetup(state,payload){
      const meetup = state.loadedMeetups.find(meetup=>{
        return meetup.id===payload.id
      })
      if(payload.title){
        meetup.title=payload.title
      }
      if(payload.description){
        meetup.description=payload.description
      }
      if(payload.date){
      meetup.date=payload.date
      }
    },
    updateEvent(state,payload){
      const event = state.loadedEvents.find(event=>{
        return event.id===payload.id
      })
      if(payload.title){
       event.title=payload.title
      }
      if(payload.description){
        event.description=payload.description
      }
      if(payload.date){
      event.date=payload.date
      }
    },
    updateStudentData(state,payload){
      const post = state.loadedUserPosts.find(post=>{
        return post.id===payload.id
      })
      if(payload.title){
        post.title=payload.title
       }
       if(payload.email){
         post.email=payload.email
       }
       if(payload.select){
       event.select=payload.select
       }
       if(payload.phone){
        event.phone=payload.phone
        }
    }

  },


  actions: {

    loadUserReg({commit}){
      commit('setLoading',true)
      firebase.database().ref('onRegistering').once('value')
      .then((data)=>{
        const eventlist=[]
        const obj =data.val()
        
        for(let key in obj){
          eventlist.push({
            id:key,
            date:obj[key].date,
            title:obj[key].title,
            select:obj[key].select,
            phone:obj[key].phone,
            email:obj[key].email
          })
        }
        commit('setLoadedUserPost',eventlist)
        commit('setLoading',false)
      })
      .catch((error)=>{
        console.log(error)
        commit('setLoading',false)
      })

    },
    updateRegUserData({commit},payload){

      commit('setLoading',true)
      const updateObj={}
      if(payload.title){
        updateObj.title=payload.title
      }
      if(payload.phone){
        updateObj.phone=payload.phone
      }
      if(payload.select){
      updateObj.select=payload.select
      }
      if(payload.email){
        updateObj.email=payload.email
        }
      firebase.database().ref('onRegistering').child(payload.id).update(updateObj).then(()=>{
        commit('setLoading',false)
        commit('updateStudentData',payload)

      }).catch(error=>{
        commit('setLoading',false)
        console.log(error)
      })
    },
    
    loadEvent({commit}){
      commit('setLoading',true)
      firebase.database().ref('events').once('value')
      .then((data)=>{
        const eventlist=[]
        const obj =data.val()
        
        for(let key in obj){
          eventlist.push({
            id:key,
            date:obj[key].date,
            description:obj[key].description,
            imageUrl:obj[key].imageUrl,
            title:obj[key].title,
            location:obj[key].location,
            time:obj[key].time,
            createId:obj[key].createId
          })
        }
        commit('setLoadedEvents',eventlist)
        commit('setLoading',false)
      })
      .catch((error)=>{
        console.log(error)
        commit('setLoading',false)
      })

    },
    createEvent({commit, getters },payload) {
      
      const event = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        createId: getters.user.id
      }
      let imageUrl
      let key
      let link
      let progress
      firebase.database().ref('events').push(event).then(
        (data)=>{
           key=data.key
         return key
        }
      ).then( key=>{
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        var x= firebase.storage().ref('events/' + key + '.' + ext).put(payload.image)
        x.on('state_changed', function(snapshot){
         progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
         
          commit('setTask',progress)
        })
         
       return x 
        })
      
      
      .then(fileData =>
        {
      
       fileData.ref.getDownloadURL().then(function(downloadURL) {
        link=downloadURL
        return link
      }).then(()=>{
        
        return firebase.database().ref('events').child(key).update({ imageUrl: link })
      })
     
      })
       .then(()=>{

          commit('createEvent',{
            ...event,
            imageUrl: imageUrl,
            id: key,
           
          }
            )
          }
          ).catch(error=>{
        console.log(error)
      })
     
   
    },
    updateEventData({commit},payload){

      commit('setLoading',true)
      const updateObj={}
      if(payload.title){
        updateObj.title=payload.title
      }
      if(payload.description){
        updateObj.description=payload.description
      }
      if(payload.date){
      updateObj.date=payload.date
      }
      firebase.database().ref('events').child(payload.id).update(updateObj).then(()=>{
        commit('setLoading',false)
        commit('updateEvent',payload)

      }).catch(error=>{
        commit('setLoading',false)
        console.log(error)
      })
    },
    loadMeetup({commit}){
      commit('setLoading',true)
      firebase.database().ref('courses').once('value')
      .then((data)=>{
        const meetuplist=[]
        const obj =data.val()
        
        for(let key in obj){
          meetuplist.push({
            id:key,
            date:obj[key].date,
            description:obj[key].description,
            imageUrl:obj[key].imageUrl,
            title:obj[key].title,
            location:obj[key].location,
            time:obj[key].time,
            createId:obj[key].createId
          })
        }
        commit('setLoadedMeetups',meetuplist)
        commit('setLoading',false)
      })
      .catch((error)=>{
        console.log(error)
        commit('setLoading',false)
      })

    },
    
    createMeetup({commit, getters },payload) {
      
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        createId: getters.user.id
      }
      let imageUrl
      let key
      let link
      firebase.database().ref('courses').push(meetup).then(
        (data)=>{
           key=data.key
         return key
        }
      ).then( key=>{
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
       return firebase.storage().ref('courses/' + key + '.' + ext).put(payload.image)
        })
      
      
      .then(fileData =>
        {
      
       fileData.ref.getDownloadURL().then(function(downloadURL) {
        link=downloadURL
        return link
      }).then(()=>{
        
        return firebase.database().ref('courses').child(key).update({ imageUrl: link })
      })
     
      })
       .then(()=>{

          commit('createMeetup',{
            ...meetup,
            imageUrl: imageUrl,
            id: key,
           
          }
            )
          }
          ).catch(error=>{
        console.log(error)
      })
     
   
    },

    updateMeetupData({commit},payload){
      commit('setLoading',true)
      const updateObj={}
      if(payload.title){
        updateObj.title=payload.title
      }
      if(payload.description){
        updateObj.description=payload.description
      }
      if(payload.date){
      updateObj.date=payload.date
      }
      firebase.database().ref('courses').child(payload.id).update(updateObj).then(()=>{
        commit('setLoading',false)
        commit('updateMeetup',payload)

      }).catch(error=>{
        commit('setLoading',false)
        console.log(error)
      })
    },

    postUserData({commit },payload) {
      
      const post= {
        title: payload.name,
        email: payload.email,
        phone: payload.phone,
        select: payload.select,
       date:payload.date
      }
     
      let key
      firebase.database().ref('onRegistering').push(post).then(
        (data)=>{
           key=data.key
         return key
        }
      ).then(()=>{
        commit('postUserData',{
          ...post,
          id:key
        })
      }).catch(error=>{
        console.log(error)
      })
     
   
    },

    signUserUp({commit}, payload)
    {
      commit('setLoading',true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then((user)=>{
      commit('setLoading',false)
      const  newUser= {
      id: user.uid,
      registeredMeetups:[]
      }

commit('setUser',newUser)
}).catch(
  error=>{
    commit('setLoading',false)
    commit('setError',error)
    console.log(error)
  }
)

},
signUserIn({commit},payload){
  commit('setLoading',true)
  commit('setError')
  firebase.auth().signInWithEmailAndPassword(payload.email,payload.password).then(
    user=>{ commit('setLoading',false)
      const newUser={
        id: user.uid,
        registeredMeetups:[]
      }
      commit('setUser',newUser)
    }
  ).catch(error=>{
    commit('setLoading',false)
    commit('setError',error)
    console.log(error)
  })

},
clearError({commit}){
commit('clearError')
},
autoSignIn({commit},payload){
  commit('setUser',{
    id:payload.uid,
    registeredMeetups:[]
  })
},
logout({commit}){
  firebase.auth().signOut()
  commit('setUser',null)
  
}
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA,meetupB)=>{
        return meetupA.date > meetupB.date
      })
    },
    loadUserReg (state) {
      return state.loadedUserPosts.sort((meetupA,meetupB)=>{
        return meetupA.date > meetupB.date 
      })
    },
    loadedEvents (state) {
      return state.loadedEvents.sort((eventA,eventB)=>{
        return eventA.date > eventB.date
      })
    },
    loadedEvent (state) {
      return ( eventId )=> {
         return state.loadedEvents.find( (event)=>{
           return event.id === eventId
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0 , 5)
    },
    loadedMeetup (state) {
      return meetupId => {
         return state.loadedMeetups.find( (meetup)=>{
           return meetup.id === meetupId
        })
      }
    },
    user(state){
      return state.user
    },
    loading(state){
      return state.loading
    },
    error(state){
      return state.error
    },
    task(state){
     
      return state.task
    }
  }
})
