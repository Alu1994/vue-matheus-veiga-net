import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Certificados',
      name: 'Certificados',
      component: () => import(/* webpackChunkName: "Certificados" */ './views/Certificados.vue')
    },
    {
      path: '/Ferramentas',
      name: 'Ferramentas',
      component: () => import(/* webpackChunkName: "Ferramentas" */ './views/Ferramentas.vue')
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "Welcome" */ './views/Welcome.vue')
    },
    {
      path: '/Dados',
      name: 'Dados',
      component: () => import(/* webpackChunkName: "Dados" */ './views/Dados.vue')
    }
  ]
})
