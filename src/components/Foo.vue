<template lang="html">
  <div>
    <h1>Foo</h1>
    <p>Total Count: {{ count }}</p>
    <button type="button" class="primary" name="goIndex" @click.prevent="goIndex()">Go Index</button>
    <button type="button" class="primary" name="increment" @click.prevent="increment()">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'foo-component',
  methods: {
    goIndex () {
      this.$router.push('/')
    },
    increment () {
      this.$store.commit('increment')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="css">
</style>
