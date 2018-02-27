<template>
  <div>
    <input type="file" @change="handleFileChange">
    <button @click="addFile">Add File</button>
  </div>
</template>

<script>
import fileService from '@/services/file'

export default {
  name: 'FileRepo',
  data () {
    return {
      file: undefined
    }
  },
  mounted () {
    fileService.getFile().then((response) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  },
  methods: {
    addFile () {
      fileService.uploadFile(this.$route.params.path, this.file).then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    },
    handleFileChange (event) {
      this.file = event.target.files[0]
    }
  }
}
</script>

<style scoped>

</style>
