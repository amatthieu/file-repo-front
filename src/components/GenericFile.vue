<template functional>
  <div></div>
</template>

<script>
import File from '@/components/File'

export default {
  name: 'GenericFile',
  render (createElement, context) {
    let chooseComponent = function () {
      let file = context.props.file

      console.log(file)

      return File
    }

    return createElement(
      chooseComponent(),
      context.data,
      context.children
    )
  }
}
</script>
