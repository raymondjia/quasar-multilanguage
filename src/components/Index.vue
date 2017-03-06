<template>
  <div>
    <h1>{{ l('hello') }}</h1>
    <button type="button" class="primary" name="goFoo" @click.prevent="goFoo()">Go Foo</button>
    <button type="button" class="primary" name="goBar" v-show='can("admin")' @click.prevent="goBar()">Go Bar</button>
    <button type="button" class="primary" name="chA" @click.prevent="changeAdmin()">Admin</button>
    <button type="button" class="primary" name="chU" @click.prevent="changeUser()">User</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World'
    }
  },
  methods: {
    goFoo () {
      this.$router.push('/foo')
    },
    goBar () {
      this.$router.push('/bar')
    },
    changeUser () {
      this.changeAccess('any')
    },
    changeAdmin () {
      this.changeAccess('admin')
    }
  }
}
</script>

<style lang="styl"></style>
