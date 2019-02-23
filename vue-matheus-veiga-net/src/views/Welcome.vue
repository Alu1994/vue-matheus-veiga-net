<template>
    <div>
        <transition name="slide" mode="out-in">
            <app-login v-if="auth"></app-login>
            <app-Welcome v-else></app-Welcome>
        </transition>
    </div>
</template>

<script>
    import Login from './../components/welcome/Login.vue'
    import AppWelcome from './../components/welcome/AppWelcome.vue'

    export default {
        computed: {
            auth() {
                return this.$store.getters.retornarShowLogin;
            }
        }
        ,
        components: {
            appLogin: Login,
            appWelcome: AppWelcome
        }
    }
</script>