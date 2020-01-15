<template>
    <div>
        <yd-navbar title="首页" height="2.4rem">
            <!-- <router-link to="#" slot="left">
                <yd-icon name="shopcart-outline" size="1.2rem" color="#09BB07"></yd-icon>
            </router-link> -->
            <router-link to="#" slot="right">
                <yd-icon name="search" size="1.2rem" color="#09BB07"></yd-icon>
            </router-link>
        </yd-navbar>
    </div>
</template>
<script>
export default {
  mounted () {
    this.$store.state.botNav.activeHome = true
  },
  destroyed () {
    this.$store.state.botNav.activeHome = false
  }
}
</script>
<style scoped>

</style>
