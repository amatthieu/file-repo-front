<template>
  <div>
    <upload-file></upload-file>
    <div>
      <generic-file
        v-for="file in files"
        :key="file.path"
        file="file">
      </generic-file>
    </div>
    <button @click="addFile">Add file</button>
  </div>
</template>

<script>
import UploadFile from '@/components/UploadFile'
import GenericFile from '@/components/GenericFile'
import fileService from '@/services/file'

export default {
  name: 'FileRepo',
  data () {
    return {
      files: [],
      i: 0
    }
  },
  mounted () {
    this.update()
  },
  watch: {
    '$route.path': function () {
      this.update()
    }
  },
  components: {
    UploadFile,
    GenericFile
  },
  methods: {
    update () {
      fileService.getFile(this.$route.params.path).then((response) => {
        this.files.splice(0, this.files.length)
        response.data.forEach(file => {
          this.files.push(file)
        })
      }, (error) => {
        console.log(error)
      })
    },
    addFile () {
      this.files.push({path: `zoieur${this.i}`})
      ++this.i
    }
  }
}
</script>

<style scoped>

</style>
