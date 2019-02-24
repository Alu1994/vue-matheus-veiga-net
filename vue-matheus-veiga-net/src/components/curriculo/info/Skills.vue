<template>
    <div
        class="col-12"
        style="text-align: left;">
        <h3>
            <img src="./../../../assets/skills.png" alt="Experiências" title="Experiências">
            <span class="title">Skills & Proficiência</span>
        </h3>
        <div class="container" v-for="skill in skillList">
            <div class="row text">
                <h3 class="col-sm-3" style="font-size:18px;font-weight:bolder;color:black;">
                    {{ skill.skillName }}
                </h3>
                <div class="progress col-sm-9" style="padding-left:0px;padding-right:0px;">
                    <div class="progress-bar" role="progressbar" style="background-color: #343a40;" :style="{ width: skill.value + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                skillList: [
                    {
                        id: 1,
                        skillName: "C#",
                        value: 90
                    },
                    {
                        id: 2,
                        skillName: ".NET Core",
                        value: 50
                    },
                    {
                        id: 3,
                        skillName: "Vue.js",
                        value: 50
                    }
                ]
            }
        }
    }
</script>


<style scoped>
    h3 img {
        width:40px;
        height:40px;
    }
    
    .title {
        margin-left:10px;
        font-size:20px;
        font-weight:bold;
    }

    .text {
        margin-top:20px;
        font-size:15px;
    }
</style>