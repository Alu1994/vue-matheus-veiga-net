<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <router-link to="/Welcome">
        <a class="navbar-brand" href="#" style="color:#FFFFFF" @click="setLoginShowRedirect(false)">Bem Vindo(a)</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/Curriculo" tag="li" class="nav-item active">
            <a class="nav-link" style="color:#FFFFFF">Curriculo <span class="sr-only">(current)</span></a>
          </router-link>
          <router-link to="/Certificados" tag="li" class="nav-item">
            <a class="nav-link" style="color:#FFFFFF">Certificados</a>
          </router-link>
          <router-link to="/Dados" tag="li" class="nav-item" v-if="auth">
            <a class="nav-link" style="color:#FFFFFF">Dados</a>
          </router-link>
        </ul>
        
        <form class="form-inline my-2 my-lg-0">
          <label for="logout" v-if="auth">
            <span>{{ userName }}</span>
            <button class="btn btn-outline-danger my-2 my-sm-0" @click.prevent="setLoginShowRedirect(false)">Logout</button>
          </label>
          <label for="login" v-else>
            <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="setLoginShowRedirect(true)">Login</button>
          </label>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        userName: 'Matheus Veiga'
      }
    },
    computed: {
      auth() {
        return this.$store.getters.retornarStatusLogin;
      }
    },
    methods: {
      ...mapActions([
          'setLoginShow'
      ]),
      setLoginShowRedirect(isShowLogin) {
        this.setLoginShow(isShowLogin);
      }
    }
  }
</script>

<style scoped>
  .menu {
    border-radius: 4px;
  }

  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .userName {
    color: #FFFFFF;
    font-weight: bolder;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }

  button {
    margin-left: 5px;
    margin-right: 5px;
  }

  form span {
    margin-right: 20px;
    color: aliceblue;
    font-weight: bold;
    text-decoration: underline;
  }
</style>