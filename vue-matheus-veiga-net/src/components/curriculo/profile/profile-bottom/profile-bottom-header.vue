<template>
    <div id="contacts">
        <p>
            <a href="#">
                <img src="./../../../../assets/linkedin_light.png" alt="linkedin" title="Linkedin">
                <span>
                    Matheus Veiga
                </span>
            </a>
        </p>
        <p>
            <a href="#">
                <img src="./../../../../assets/github_light.png" alt="github" title="GitHub">
                <span>
                    Matsennin
                </span>
            </a>
        </p>
        <p>
            <a href="#">
                <img src="./../../../../assets/phone_light.png" alt="telefone" title="Telefone">
                <span>
                    tel: (11) 3992-7476 / 98880-1976
                </span>
            </a>
        </p>
        <p>
            <a href="#">
                <img style="height:20px;" src="./../../../../assets/email_light.png" alt="email" title="Email">
                <span>
                    cavalcante.matheusveiga@gmail.com
                </span>
            </a>
        </p>
        <p>
            <a href="#">
                <img style="height:28px;" src="./../../../../assets/resume_light.png" alt="curriculo" title="Currículo">
                <span>
                    Currículo
                </span>
            </a>
        </p>
    </div>
</template>

<style scoped>
    #contacts {
        padding-top: 40px;
    }
    #contacts, a {
        color: #FFFFFF;
        margin: 10px;
        text-align: left;
    }
    #contacts img {
        width: 25px;
        height: 22px;
        margin-top: -5px;
    }
    #contacts span {
        margin-left: 5px;
    }

    a:hover {
        color: #3a84c3;
        text-decoration: none;
    }
</style>
