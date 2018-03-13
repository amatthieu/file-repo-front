import Vue from 'vue'
import AuthorizationToken from '@/../static/AuthorizationToken'

const signIn = function (login, password) {
  return Vue.http.post(`${process.env.SERVER_URL}/oauth/token?username=${login}&password=${password}&grant_type=password`, {}, {
    headers: {
      Authorization: AuthorizationToken
    }
  }).then((response) => {
    sessionStorage.setItem('token', response.data.access_token)
  })
}

const isLogged = function () {
  return sessionStorage.getItem('token') || false
}

const getToken = function () {
  return sessionStorage.getItem('token')
}

export default {
  signIn,
  isLogged,
  getToken
}
