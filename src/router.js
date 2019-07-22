import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goTo from 'vuetify/lib/components/Vuetify/goTo'

Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/events',
      name: 'events',  
      component: () => import('./views/Events.vue')
    },
    {
      path: '/courses',
      name: 'courses',  
      component: () => import('./views/Courses.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',  
      component: () => import('./views/Contacts.vue')
    },
    {
      path: '/services',
      name: 'services',  
      component: () => import('./views/Services.vue')
    },
    {
      path: '/courses/:id',
      name: 'courses/id',  
      props: true,
      component: () => import('./components/Reusable/Definition.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',  
      component: () => import('./components/AdminPanel/DashboardPage.vue')
    }
  ]
})
