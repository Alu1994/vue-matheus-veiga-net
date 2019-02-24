<template>
    <div>
        <p class="profile-bottom-title">
            Interesse
        </p>
        <div v-for="interest in interests">
            <p>{{ interest }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                interests: [
                    'Kung Fu', 'Games', 'Ciências', 'Progamação'
                ]
            }
        }
    }
</script>

<style scoped>
    p {
        text-align: left;
        margin-left: 20px;
        margin-right: 20px;
    }

    span {
        font-weight: normal;
    }
</style>