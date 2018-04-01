import Vue from 'vue'
import Router from 'vue-router'
import Dropdown from '@/components/dropdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dropdown',
      component: Dropdown
    }
  ]
})
