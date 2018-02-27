import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  oAuthToken: ''
}

const mutations = {
  setToken (state, newOAuthToken) {
    state.oAuthToken = newOAuthToken
  }
}

export default new Vuex.Store({
  state,
  mutations
})
