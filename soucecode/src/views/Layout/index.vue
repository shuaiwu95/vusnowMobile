<template>
    <div>
       <router-view :include="cachedViews"/>
       <yd-tabbar :fixed="true" active-color="#0172FF">
        <yd-tabbar-item title="统计分析" link="/" :active="activeHome">
            <yd-icon name="tjfx" custom slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="工作台" link="/classview" :active="activeClass">
            <yd-icon name="gzt" custom slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="/mine" :active="activeMine">
            <yd-icon name="wd" custom slot="icon"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  methods: {

  },
  computed: {
    ...mapGetters('botNav', {
      activeHome: 'getHome',
      activeClass: 'getClass',
      activeMine: 'getMine'
    }),
    ...mapGetters('views', { // views.js里面的getters
      cachedViews: 'cachedViews'
    })
  },
  mounted () {
    this.$store.state.botNav.activeHome = true
  }
}
</script>
