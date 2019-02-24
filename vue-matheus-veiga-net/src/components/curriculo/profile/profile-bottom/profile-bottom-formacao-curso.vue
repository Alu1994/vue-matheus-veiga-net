<template>
    <div :value="formationType">
        <p class="profile-bottom-title">
            {{ formationType.title }}
        </p>
        <div v-if="formationType.type == 1" v-for="graduation in graduations">
            <p class="course">{{ graduation.name }}</p>
            <p>{{ graduation.place }}</p>
            <p>{{ graduation.time }}</p>
        </div>
        <div v-if="formationType.type == 2" v-for="course in courses">
            <p class="course">{{ course.name }}</p>
            <p>{{ course.place }}</p>
            <p>{{ course.time }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['formationType'],
        data() {
            return {
                graduations: [
                    {
                        name: "Tecnologia em Banco de Dados",
                        place: "Universidade Nove de Julho",
                        time: "2012 - 2014"
                    },
                    {
                        name: "Técnico em Informática",
                        place: "Senac (Lapa Tito)",
                        time: "2011 - 2012"
                    }                    
                ],
                courses: [
                    {
                        name: "Inglês (Módulo - W12)",
                        place: "Wizard",
                        time: "2015 - 2016"
                    },
                    {
                        name: "SQL Server 2012 Administering Databases",
                        place: "Green Treinamento",
                        time: "2015"
                    }                    
                ]
            }
        }
    }
</script>

<style scoped>
    .course {
        font-weight: bolder;
    }

    p {
        text-align: left;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>