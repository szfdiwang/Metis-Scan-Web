import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [{
    path: '/home',
    name: 'home',
    component: Home
  }]
},
{
  path: '/node',
  component: Layout,
  children: [{
    path: '/node/index',
    name: 'node',
    component: () => import(/* webpackChunkName: "node" */ '../views/Node/Node.vue')
  },
  {
    path: '/node/NodeDetail',
    name: 'nodeDetail',
    component: () => import(/* webpackChunkName: "NodeDetail" */ '../views/Node/NodeDetail.vue')
  },
  {
    path: '/node/MetaData',
    name: 'MetaData',
    component: () => import(/* webpackChunkName: "MetaData" */ '../views/Node/MetaData.vue')
  }
  ]
},
{
  path: '/data',
  component: Layout,
  children: [{
    path: '/data/index',
    name: 'data',
    component: () => import(/* webpackChunkName: "data" */ '../views/Data/Data.vue')
  },
  {
    path: '/data/DataDetail',
    name: 'dataDetail',
    component: () => import(/* webpackChunkName: "DataDetail" */ '../views/Data/DataDetail.vue')
  }
  ]
},
{
  path: '/task',
  component: Layout,
  children: [{
    path: '/task/index',
    name: 'task',
    component: () => import(/* webpackChunkName: "TaskHome" */ '../views/Task/Task.vue')
  },

  {
    path: '/task/TaskDetail',
    name: 'taskDetail',
    component: () => import(/* webpackChunkName: "TaskDetail" */ '../views/Task/TaskDetail.vue')
  },
  {
    path: '/task/TaskLog',
    name: 'TaskLog',
    component: () => import(/* webpackChunkName: "TaskLog" */ '../views/Task/TaskLog.vue')
  }
  ]

}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router