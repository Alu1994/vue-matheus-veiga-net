<template>
    <div>
        <app-profile-bottom-header class="profile-bottom-item"></app-profile-bottom-header>
        <app-profile-bottom-formacao class="profile-bottom-item" :formationType="formationType[0]"></app-profile-bottom-formacao>
        <app-profile-bottom-formacao class="profile-bottom-item" :formationType="formationType[1]"></app-profile-bottom-formacao>
        <app-profile-bottom-idioma class="profile-bottom-item"></app-profile-bottom-idioma>
        <app-profile-bottom-interesse class="profile-bottom-item"></app-profile-bottom-interesse>
    </div>    
</template>

<script>
    import ProfileBottomHeader from './profile-bottom/profile-bottom-header.vue'
    import ProfileBottomFormacao from './profile-bottom/profile-bottom-formacao-curso.vue'
    import ProfileBottomIdioma from './profile-bottom/profile-bottom-idioma.vue'
    import ProfileBottomInteresse from './profile-bottom/profile-bottom-interesse.vue'

    export default {
        data() {
            return {
                formationType: [
                    {
                        title: "Formação",
                        type: 1
                    },
                    {
                        title: "Curso",
                        type: 2
                    }
                ]
            }
        },
        components: {
            appProfileBottomHeader: ProfileBottomHeader,
            appProfileBottomFormacao: ProfileBottomFormacao,
            appProfileBottomIdioma: ProfileBottomIdioma,
            appProfileBottomInteresse: ProfileBottomInteresse
        }
    }
</script>

<style>
    .profile-bottom-item {
        padding-bottom: 30px;
    }

    .profile-bottom-title {
        margin: 20px;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        text-decoration: underline;
    }
</style>
