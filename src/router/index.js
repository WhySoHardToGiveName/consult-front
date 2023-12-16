import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UserRegisterView from '../views/UserRegisterView.vue'
import ExpertRegisterView from '@/views/ExpertRegisterView';
import ChatView from "@/views/ChatView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/userRegister',
    name: 'userRegister',
    component: UserRegisterView
  },
  {
    path: '/expertRegister',
    name: 'expertRegister',
    component: ExpertRegisterView
  },
  {
    path: '/chat/:chatID',
    name: 'chat',
    component: ChatView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login'&&from.path!=='/register'&&from.path!=='/forget') {
    localStorage.setItem("preRoute", router.currentRoute.fullPath);
  }

  next()
})
export default router
