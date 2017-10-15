import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld');
const UE = r => require.ensure([], () => r(require('@/views/editor/editor')), 'editor');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/ue',
      name: 'ue',
      component: UE
    }
  ]
})
