<template>
    <div>
        <p class="profile-bottom-title">
            Idiomas
        </p>
        <div v-for="idiom in idioms">
            <p class="idiom">{{ idiom.name }} <span>{{ idiom.level }}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                idioms: [
                    {
                        name: "Português",
                        level: "(Fluente)"
                    },
                    {
                        name: "Inglês",
                        level: "(Fluente)"
                    }                    
                ]
            }
        }
    }
</script>

<style scoped>
    .idiom {
        font-weight: bolder;
    }

    p {
        text-align: left;
        margin-left: 20px;
        margin-right: 20px;
    }

    span {
        font-weight: normal;
    }
</style>