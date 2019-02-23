import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    showLogin: false
  },
  mutations: {
    LoginShow(state, isUserLoged) {
      state.showLogin = isUserLoged
      Router.push('/')
    },
    Login(state) {
      state.login = true
    }
  },
  actions: {
    setLoginShow({commit}, isUserLoged) {
      commit('LoginShow', isUserLoged)
    },
    setLogin({commit}) {
      commit('Login')
    }
  },
  getters: {
    retornarShowLogin(state) {
      return state.showLogin
    },
    retornarStatusLogin(state) {
      return state.login
    }
  }
})
