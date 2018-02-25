import Vue from 'vue'
import AuthorizationToken from '@/../static/AuthorizationToken'

let signIn = function () {
  return Vue.http.post(`${process.env.SERVER_URL}/oauth/token?username=${this.login}&password=${this.password}&grant_type=password`, {}, {
    headers: {
      // This should be in a separate private file
      Authorization: AuthorizationToken
    }
  })
}

export default {
  signIn
}
