<template>
    <div
        class="col-12"
        style="text-align: left;">
        <h3>
            <img src="./../../assets/projects.png" alt="Experiências" title="Experiências">
            <span class="title">Projetos</span>
        </h3>
        <h4 class="title" style="font-size:18px;margin-top:20px;">
            Abaixo segue uma breve descrição dos projetos desenvolvidos.
        </h4>
        <div class="text" v-for="project in projectList">
            <div class="row">
                <div class="col-12" style="color: black;font-weight: bold;">
                    {{ project.projectName + " - " + project.id }}
                </div>
            </div>
            <p style="color: black;">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projectList: [
                    {
                        id: 1,
                        projectName: "Capta Soluções para Joalherias",
                        description: "Solução completa para o comércio de joalherias com módulos ERP, " +
                        "Financeiro e Contabilidade, desenvolvidos em WPF (VB/C# Framework 4.5.1), " +
                        "Entity Framework 6.0 e SQL Server com controle de versão via Team Foundation."
                    },
                    {
                        id: 2,
                        projectName: "Portal para Avaliação de Atendimento",
                        description: "Solução completa para o comércio de joalherias com módulos ERP, " +
                        "Financeiro e Contabilidade, desenvolvidos em WPF (VB/C# Framework 4.5.1), " +
                        "Entity Framework 6.0 e SQL Server com controle de versão via Team Foundation."
                    },
                    {
                        id: 3,
                        projectName: "Integrador CRM Dynamics",
                        description: "Solução completa para o comércio de joalherias com módulos ERP, " +
                        "Financeiro e Contabilidade, desenvolvidos em WPF (VB/C# Framework 4.5.1), " +
                        "Entity Framework 6.0 e SQL Server com controle de versão via Team Foundation."
                    },
                    {
                        id: 4,
                        projectName: "Sigposto",
                        description: "Solução completa para o comércio de joalherias com módulos ERP, " +
                        "Financeiro e Contabilidade, desenvolvidos em WPF (VB/C# Framework 4.5.1), " +
                        "Entity Framework 6.0 e SQL Server com controle de versão via Team Foundation."
                    },
                    {
                        id: 5,
                        projectName: "Portal de Monitoramento dos Clientes Microsffer",
                        description: "Solução completa para o comércio de joalherias com módulos ERP, " +
                        "Financeiro e Contabilidade, desenvolvidos em WPF (VB/C# Framework 4.5.1), " +
                        "Entity Framework 6.0 e SQL Server com controle de versão via Team Foundation."
                    },
                    {
                        id: 6,
                        projectName: "Integração entre sistemas",
                        description: "Solução completa para o comércio de joalherias com módulos ERP, " +
                        "Financeiro e Contabilidade, desenvolvidos em WPF (VB/C# Framework 4.5.1), " +
                        "Entity Framework 6.0 e SQL Server com controle de versão via Team Foundation."
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