import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from '../src/index'

import Installation from './components/Installation.vue'
import BasicUsage from './components/BasicUsage.vue'
import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Styling from './components/Styling.vue'

import * as batlote from './components/batlote'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)

const router = new VueRouter({
  routes: [
    ...batlote.Routes,
    /*
    {
      path: '/Installation',
      name: 'Installation',
      component: Installation
    },
    {
      path: '/basic-usage',
      name: 'BasicUsage',
      component: BasicUsage
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/styling',
      name: 'Styling',
      component: Styling
    },
    {
      path: '/page/sub-page-1',
      name: 'SubPage01',
      component: Events
    }
    */
  ]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})
