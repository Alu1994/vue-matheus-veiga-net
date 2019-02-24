<template>
  <div id="app">
    <div id="nav" class="vue-menu-header">
      <app-header></app-header>
    </div>
    <transition name="slide" mode="out-in">
      <router-view class="vue-view-router"></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #343a40;
  }

  #nav {
    padding: 0px;
  }

  #nav a {
    font-weight: bold;
    color: #343a40;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .vue-menu-header {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    z-index: 10;
    position: fixed;
  }

  .vue-view-router {
    z-index:-1;
  }
  

  .slide-enter-active {
      animation: slide-in 200ms ease-out forwards;
  }

  .slide-enter-leave {
      animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
      from {
          transform: translateY(-30px);
          opacity: 0;
      }
      to {
          transform: translateY(0);
          opacity: 1;
      }
  }

  @keyframes slide-out {
      from {
          transform: translateY(0);
          opacity: 1;
      }
      to {
          transform: translateY(-30px);
          opacity: 0;
      }
  }
</style>
