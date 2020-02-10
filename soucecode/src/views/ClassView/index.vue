<template>
    <con-view :hasTopNav="false">
      <span>请尝试进行下拉动作~</span>
    </con-view>
</template>
<script>
import ConView from '@common/ConView'
export default {
  components: { ConView },
  mounted () {
    this.$store.state.botNav.activeClass = true
  },
  destroyed () {
    this.$store.state.botNav.activeClass = false
  }
}
</script>
<style scoped>

</style>
