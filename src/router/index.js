import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Units from '../components/Units.vue'
import Tasks from '../components/Tasks.vue'

Vue.use(VueRouter)

const routes = [
  {
	path: '/',
	name: 'Home',
	component: Home
  },
	 {
	path: '/Home',
	name: 'Home',
	component: Home
  },
	 {
	path: '/Units',
	name: 'Units',
	component: Units
  },
	 {
	path: '/Tasks',
	name: 'Tasks',
	component: Tasks
  },
  {
	path: '/about',
	name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
