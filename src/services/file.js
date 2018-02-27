import Vue from 'vue'
import store from '@/vuex'

const getFile = function (path) {
  console.log(store)
  if (!path) {
    path = ''
  }
  return Vue.http.get(`${process.env.SERVER_URL}/file/get/${path}`, {
    headers: {
      Authorization: `Bearer ${store.state.oAuthToken}`
    }
  })
}

const uploadFile = function (path, file) {
  if (!path) {
    path = ''
  }
  console.log(file)
  var formData = new FormData()
  formData.append('file', file)
  return Vue.http.post(`${process.env.SERVER_URL}/file/upload/${path}`, formData, {
    headers: {
      Authorization: `Bearer ${store.state.oAuthToken}`
    }
  })
}

export default {
  getFile,
  uploadFile
}
