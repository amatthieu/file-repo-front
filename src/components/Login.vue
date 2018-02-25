<template>
  <form class="login"
        @submit.prevent="signIn">
    <div class=input>
      <label for="login">
        Login
      </label>
      <input v-model="login"
             type="text"
             id="login"
             class="user-input">
      </div>
    <div class=input>
      <label for="password">
        Pass
      </label>
      <input v-model="password"
             type="password"
             id="password"
             class="user-input">
      </div>
    <div class="user-buttons">
      <button @click="signOn"
              class="user-button">
        Sign On
      </button>
      <input type="submit"
             value="Sign in"
             class="user-button">
    </div>
    <div v-if="loginError">
      Wrong pass !
    </div>
  </form>
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
        this.$router.push('MainPage')
      }, (_) => {
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
  /* Center login div */
  grid-column: 2;
  grid-row: 2;
  /* Make it beautiful ! */
  border: 1px solid darkgrey;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffffe7;
  color: #696969;
  font-weight: bold;
  box-shadow: 5px 5px 3px darkgrey;
}

.user-input{
  background-color: #1694b3c7;
  color: #ffffff;
  border: 1px solid;
  border-radius: 8px;
  padding: 0 4px;
  margin: 5px 0;
  outline: 0;
}
.user-input::selection {
  background-color: darkgrey;
}
.user-input:focus {
  box-shadow: 0px 0px 5px rgb(84, 193, 230);
}

.user-buttons {
  margin-top: 10px;
}

.user-button {
  color: #ffffff;
  background-color: #1694b3c7;
  font-weight: bold;
  border-radius: 7px;
  border: 1px lightgrey solid;
  outline: 0;
  transition: all .1s ease-in;
}
.user-button:hover {
  background-color: #106d85c7;
  transition: all .1s ease-in;
}
.user-button:active {
  border: 1px rgba(87, 160, 179, 0.589) solid;
  background-color: #106d85c7;
  transition: all .1s ease-in;
}
</style>
