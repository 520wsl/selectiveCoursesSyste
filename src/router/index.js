import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'Hello');/** 首页 Hello */
const editor = r => require.ensure([], () => r(require('@/views/editor/editor')), 'editor');/** Ueditor富文本编辑器 */
const courses = r => require.ensure([], () => r(require('@/views/selective/courses')),'courses');/** 选课系统表格 */
const manage = r => require.ensure([], () => r(require('@/views/manage')),'manage');/** Element 框架测试 */


export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },/** 首页 Hello */
    { path: '/ue', name: 'ue', component: editor },/** Ueditor富文本编辑器 */    
    { path: '/courses', name: 'courses', component: courses },/** 选课系统表格 */
    { path: '/manage', name: 'manage', component: manage},/** Element 框架测试 */
  ]
})
