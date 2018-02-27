import Vue from 'vue'
import AuthorizationToken from '@/../static/AuthorizationToken'

const signIn = function (login, password) {
  return Vue.http.post(`${process.env.SERVER_URL}/oauth/token?username=${login}&password=${password}&grant_type=password`, {}, {
    headers: {
      Authorization: AuthorizationToken
    }
  })
}

export default {
  signIn
}
