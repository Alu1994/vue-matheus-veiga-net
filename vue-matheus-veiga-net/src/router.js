import Vue from 'vue'
import Router from 'vue-router'
import Curriculo from './views/Curriculo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "Welcome" */ './views/Welcome.vue')
    },
    {
      path: '*',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "Welcome" */ './views/Welcome.vue')
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "Welcome" */ './views/Welcome.vue')
    },
    {
      path: '/Curriculo',
      name: 'Curriculo',
      component: Curriculo
    },
    {
      path: '/Certificados',
      name: 'Certificados',
      component: () => import(/* webpackChunkName: "Certificados" */ './views/Certificados.vue')
    },
    {
      path: '/Dados',
      name: 'Dados',
      component: () => import(/* webpackChunkName: "Dados" */ './views/Dados.vue')
    }
  ]
})
