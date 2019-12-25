<template>
    <div>
      <button @click="toLogin">跳转到登录页面</button>
    </div>
</template>
<script>
export default {
  name: 'Layout',
  methods: {
    toLogin () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
