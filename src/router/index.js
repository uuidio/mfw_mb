import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import jieban from '@/components/jieban/jieban'
import dangdiyou from '@/components/dangdiyou/dangdiyou'
import shangdian from '@/components/shangdian/shangdian'
import local from '@/components/local/local'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
			path: '/jieban',
			component: jieban
		},
		{
			path: '/dangdiyou',
			component: dangdiyou
    },
    {
			path: '/shangdian',
			component: shangdian
    },
    {
			path: '/local',
			component: local
		}
  ]
})
