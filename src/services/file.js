import Vue from 'vue'

const getFile = function (path) {
  if (!path) {
    path = ''
  }
  return Vue.http.get(`${process.env.SERVER_URL}/file/get/${path}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  })
}

const uploadFile = function (path, file) {
  if (!path) {
    path = ''
  }
  var formData = new FormData()
  formData.append('file', file)
  return Vue.http.post(`${process.env.SERVER_URL}/file/upload/${path}`, formData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  })
}

export default {
  getFile,
  uploadFile
}
