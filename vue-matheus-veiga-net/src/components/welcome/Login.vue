<template>
    <div id="signin">
        <div class="signin-form">
            <div style="padding-left:0px;padding-top:35px;">
              <h3>Perfil Matheus</h3>
            </div>
            <form>
                <div class="fields">
                    <div class="input">
                        <label for="user">Usuário</label>
                        <input
                          type="text"
                          id="user"
                          >
                    </div>
                    <div class="input">
                        <label for="password">Senha</label>
                        <input
                          type="password"
                          id="password"
                          >
                    </div>
                </div>
                <div class="submit">
                    <br>
                    <button type="submit" class="btn btn-outline-success my-2 my-sm-0" @click.prevent="">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions([
          'setLoginShow'
      ]),
      Login() {
          this.setLoginShow();
      },  
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', { email: formData.email, password: formData.password });
      }
    }
  }
</script>

<style scoped>
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    border-radius: 10px;
  }

  .fields {
    padding-top: 20px; 
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
    text-align: left;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input input:focus {
    outline: none;
    background-color: #eee;
  }

  .submit {
      background:#343a40;
      padding-bottom: 20px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
  }

  .submit button {
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    border-radius: 5px;
    background-color: #FFFFFF;
  }

  .submit button:hover,
  .submit button:active {
    color: white;
    background-color: #28a745;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>