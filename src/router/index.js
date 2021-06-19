import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
/* Layout */
import Layout from '@/layout'
import Map from '@/views/Map/TestMap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/map',
    name: 'Map',
    component: Map // () => import(/* webpackChunkName: "map" */ '../views/Map/TestMap.vue')
  },
  {
    path: '/node',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'NodeHome',
        component: () => import(/* webpackChunkName: "node" */ '../views/Node/Node.vue')
      },
      {
        path: '/NodeDetail',
        name: 'NodeDetail',
        component: () => import(/* webpackChunkName: "NodeDetail" */ '../views/Node/NodeDetail.vue')
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'DataHome',
        component: () => import(/* webpackChunkName: "data" */ '../views/Data/Data.vue')
      },
      {
        path: '/DataDetail',
        name: 'DataDetail',
        component: () => import(/* webpackChunkName: "DataDetail" */ '../views/Data/DataDetail.vue')
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'TaskHome',
        component: () => import(/* webpackChunkName: "TaskHome" */ '../views/Task/Task.vue')
      },
      {
        path: '/TaskDetail',
        name: 'TaskDetail',
        component: () => import(/* webpackChunkName: "TaskDetail" */ '../views/Task/TaskDetail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
