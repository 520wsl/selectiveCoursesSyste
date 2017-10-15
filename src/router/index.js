import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'Hello');
const editor = r => require.ensure([], () => r(require('@/views/editor/editor')), 'editor');

const courses = r => require.ensure([], () => r(require('@/views/selective/courses')),'courses')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ue',
      name: 'ue',
      component: editor
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    }
  ]
})
