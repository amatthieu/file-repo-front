<template>
  <div class="login">
    <div class=input>
      Login :
      <input v-model="login"
             type="text">
      </div>
    <div class=input>
      Pass :
      <input v-model="password"
             type="password">
      </div>
    <div>
      <button @click="signOn">
        Sign on
      </button>
      <button @click="signIn">
        Sign in
      </button>
    </div>
    <div v-if="loginError">
      Wrong pass !
    </div>
  </div>
</template>

<script>
import LoginService from '@/services/login.js'

export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: '',
      loginError: false
    }
  },
  methods: {
    signIn () {
      LoginService.signIn().then((response) => {
        console.log(response)
        this.$router.push('MainPage')
      }, (error) => {
        console.log(error)
        this.loginError = true
      })
    },
    signOn () {
      this.$router.push('Subscribe')
    }
  }
}
</script>

<style scoped>
.login {
  /* Center items and make it in columns */
  display: flex;
  flex-flow: column;
  align-items: center;
  /* Center global div */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Make it beautiful ! */
  border: 1px solid darkgrey;
  border-radius: 10px;
  padding: 10px;
}
</style>
