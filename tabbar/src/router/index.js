import Vue from 'vue'
import VueRouter from 'vue-router'

const Bi = () => import('../views/Bilibili/Bi')
const Gi = () => import('../views/GitHub/Gi')
const Tw = () => import('../views/Twitter/Tw')
const Yo = () => import('../views/YouTube/Yo')

//1.安装插件
Vue.use(VueRouter)
    
//2.创建路由对象
const routes = [
	{
		path: '',
		redirect: '/gi'
	},
	{
		path: '/bi',
		component: Bi 
	},
	{
		path: '/gi',
		component: Gi
	},
	{
		path: '/tw',
		component: Tw
	},
	{
		path: '/yo',
		component: Yo 
	}
]

const router = new VueRouter({
	routes
})

//3.导出router
export default router
