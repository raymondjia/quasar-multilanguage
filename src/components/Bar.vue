<template lang="html">
  <div>
    <h1>Bar</h1>
    <button type="button" class="primary" name="goIndex" @click.prevent="goIndex()">Go Index</button>
  </div>
</template>

<script>
export default {
  name: 'bar-component',
  methods: {
    goIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
