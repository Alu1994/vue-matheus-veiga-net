<template>
    <div
        class="col-12"
        style="text-align: left;">
        <h3>
            <img src="./../../../assets/experiences.png" alt="Experiências" title="Experiências">
            <span class="title">Experiências</span>
        </h3>
        <div class="text" v-for="experience in experienceList">
            <div class="row">
                <div class="col-8" style="color: black;">
                    {{ experience.office + " - " + experience.id }}
                </div>            
                <div class="col-4" style="text-align: right;font-weight: bold;">
                    {{ experience.time }}
                </div>
            </div>
            <p style="font-weight: bold;">
                {{ experience.company }}
            </p>
            <p style="color: black;">
                {{ experience.description }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                experienceList: [
                    {
                        id: 1,
                        office: "Desenvolvedor .NET",
                        time: "2018 - Atual",
                        company: "Itaú Unibanco S/A, São Paulo",
                        description: "Manutenção de Serviço em WCF da corretora itaú. \r\n" +
                        "Desenvolvimento do Robô de expurgo em .Net Core 2.1\r\n" +
                        "Site em WCF desenvolvido em C# para distribuição das informações referente aos dados da corretora.\r\n" +
                        "Criação em .Net Core 2.1 do robô de expurgo de todos os objetos de banco de dados Sql Server e Oracle, utilizando como source control o Git on GitLab."
                    },
                    {
                        id: 2,
                        office: "Desenvolvedor .NET",
                        time: "2016 - 2018",
                        company: "Grupo Zap",
                        description: "Manutenção de Serviço em WCF da corretora itaú. \r\n" +
                        "Desenvolvimento do Robô de expurgo em .Net Core 2.1\r\n" +
                        "Site em WCF desenvolvido em C# para distribuição das informações referente aos dados da corretora.\r\n" +
                        "Criação em .Net Core 2.1 do robô de expurgo de todos os objetos de banco de dados Sql Server e Oracle, utilizando como source control o Git on GitLab."
                    },
                    {
                        id: 3,
                        office: "Desenvolvedor .NET",
                        time: "2015 - 2016",
                        company: "Capta",
                        description: "Manutenção de Serviço em WCF da corretora itaú. \r\n" +
                        "Desenvolvimento do Robô de expurgo em .Net Core 2.1\r\n" +
                        "Site em WCF desenvolvido em C# para distribuição das informações referente aos dados da corretora.\r\n" +
                        "Criação em .Net Core 2.1 do robô de expurgo de todos os objetos de banco de dados Sql Server e Oracle, utilizando como source control o Git on GitLab."
                    },
                    {
                        id: 4,
                        office: "Desenvolvedor .NET",
                        time: "2014 - 2015",
                        company: "Microsffer",
                        description: "Manutenção de Serviço em WCF da corretora itaú. \r\n" +
                        "Desenvolvimento do Robô de expurgo em .Net Core 2.1\r\n" +
                        "Site em WCF desenvolvido em C# para distribuição das informações referente aos dados da corretora.\r\n" +
                        "Criação em .Net Core 2.1 do robô de expurgo de todos os objetos de banco de dados Sql Server e Oracle, utilizando como source control o Git on GitLab."
                    },
                    {
                        id: 5,
                        office: "Desenvolvedor .NET",
                        time: "2012 - 2014",
                        company: "Quantico",
                        description: "Manutenção de Serviço em WCF da corretora itaú. \r\n" +
                        "Desenvolvimento do Robô de expurgo em .Net Core 2.1\r\n" +
                        "Site em WCF desenvolvido em C# para distribuição das informações referente aos dados da corretora.\r\n" +
                        "Criação em .Net Core 2.1 do robô de expurgo de todos os objetos de banco de dados Sql Server e Oracle, utilizando como source control o Git on GitLab."
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