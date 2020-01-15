<template>
    <span>mine</span>
</template>
<script>
export default {
  mounted () {
    this.$store.state.botNav.activeMine = true
  },
  destroyed () {
    this.$store.state.botNav.activeMine = false
  }
}
</script>
<style scoped>

</style>
