<template>
    <div>
       <router-view />
       <yd-tabbar :fixed="true" fontsize="0.6rem" padding=".6rem 0">
        <yd-tabbar-item title="首页" link="/" :active="activeHome">
            <yd-icon name="home" slot="icon" size="1rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" link="/classview" :active="activeClass">
            <yd-icon name="star" slot="icon" size="1rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人" link="/mine" :active="activeMine">
            <yd-icon name="ucenter-outline" slot="icon" size="1rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  methods: {
    toLogin () {
      this.$clearToken()
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    ...mapGetters('botNav', {
      activeHome: 'getHome',
      activeClass: 'getClass',
      activeMine: 'getMine'
    })
  }
}
</script>
