<template>
  <nav class="navbar navbar-expand-lg navbar-light menu" style="background-color: #68217a;" @click="esconderMenu(openMenu)">
    <router-link to="/Welcome" tag="li" class="nav-item active" style="list-style-type: none;">
          <a class="navbar-brand" style="color:#FFFFFF">Welcome</a>
        </router-link>
    <button class="navbar-toggler" type="button" data-toggle="open" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" :class="{collapse: openMenu}" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/" tag="li" class="nav-item active">
          <a class="nav-link" style="color:#FFFFFF">Curriculo <span class="sr-only">(current)</span></a>
        </router-link>
        <router-link to="/Certificados" tag="li" class="nav-item">
          <a class="nav-link" style="color:#FFFFFF">Certificados</a>
        </router-link>
        <router-link to="/Ferramentas" tag="li" class="nav-item">
          <a class="nav-link" style="color:#FFFFFF">Ferramentas</a>
        </router-link>
        <router-link to="/Dados" tag="li" class="nav-item">
          <a class="nav-link" style="color:#FFFFFF">Dados</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        openMenu: false,
        userName: 'Matheus Veiga'
      }
    },
    methods: {
      esconderMenu(isHide) {
        this.openMenu = !isHide;
      }
    }
  }
</script>

<style scoped>
  .menu {
    border-radius: 4px;
  }
</style>