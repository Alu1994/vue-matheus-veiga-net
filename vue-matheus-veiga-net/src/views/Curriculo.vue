<template>
  <div
    class="container">
    <div 
      class="row">
      <div 
        class="col-8">
          <app-perfil-carreira class="resumeComponents"></app-perfil-carreira>
          <app-experiencias class="resumeComponents"></app-experiencias>
          <app-projetos class="resumeComponents"></app-projetos>
          <app-skills class="resumeComponents"></app-skills>
        </div>
      <div 
        class="col-4">col-4</div>
    </div>
  </div>
</template>

<script>
  import PerfilCarreira from './../components/curriculo/PerfilCarreira.vue'
  import Experiencias from './../components/curriculo/Experiencias.vue'
  import Projetos from './../components/curriculo/Projetos.vue'
  import Skills from './../components/curriculo/Skills.vue'

  export default {
    name: 'curriculo',
    components: {
      appPerfilCarreira: PerfilCarreira,
      appExperiencias: Experiencias,
      appProjetos: Projetos,
      appSkills: Skills
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

  .row .col-8 {
    background:#FFFFFF;
    height: 2903px;
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;
    border: 1px solid #343a40;
    color: #343a40;
  }

  .row .col-4 {
    background:#343a40;
    height: 2903px;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    color: #FFFFFF;
  }

  .resumeComponents {
    margin-top:30px;
    margin-bottom:60px;
    margin-right:20px;
  }
</style>