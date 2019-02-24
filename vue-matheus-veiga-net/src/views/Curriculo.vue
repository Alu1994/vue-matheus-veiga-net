<template>
  <div
    class="container">
    <div 
      class="row">
      
      <div 
        class="col-sm-4">
        <div class="profile-container-top">
          <app-profile-top></app-profile-top>
        </div>
        <div class="profile-container-bottom">
          <app-profile-bottom></app-profile-bottom>
        </div>
      </div>
      
      <div 
        class="col-sm-8">
          <app-perfil-carreira class="resumeComponents"></app-perfil-carreira>
          <app-experiencias class="resumeComponents"></app-experiencias>
          <app-projetos class="resumeComponents"></app-projetos>
          <app-skills class="resumeComponents"></app-skills>
        </div>
      
    </div>
  </div>
</template>

<script>
  import PerfilCarreira from './../components/curriculo/info/PerfilCarreira.vue'
  import Experiencias from './../components/curriculo/info/Experiencias.vue'
  import Projetos from './../components/curriculo/info/Projetos.vue'
  import Skills from './../components/curriculo/info/Skills.vue'

  import ProfileTop from './../components/curriculo/profile/profile-top.vue'
  import ProfileBottom from './../components/curriculo/profile/profile-bottom.vue'

  export default {
    name: 'curriculo',
    components: {
      appPerfilCarreira: PerfilCarreira,
      appExperiencias: Experiencias,
      appProjetos: Projetos,
      appSkills: Skills,

      appProfileTop: ProfileTop,
      appProfileBottom: ProfileBottom
    }
  }
</script>

<style scoped>
  div .container {
    padding-top: 80px;
  }

  .container .row {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .row .col-sm-8 {
    background:#FFFFFF;
    min-height: 2500px;
    max-height: 8000px;
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;
    border: 1px solid #343a40;
    color: #343a40;
  }

  .row .col-sm-4 {
    background:#343a40;
    min-height: 2500px;
    max-height: 8000px;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    color: #FFFFFF;
    padding:0;
  }

  .resumeComponents {
    margin-top:30px;
    margin-bottom:60px;
    margin-right:20px;
  }

  .profile-container-top {
    height: 14%;
  }

  .profile-container-bottom {
    background-color: #243a40;
    width: 100%;
    height: 85.6%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
  }
</style>