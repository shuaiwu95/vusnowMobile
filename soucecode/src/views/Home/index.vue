<template>
    <div>
        <yd-navbar title="首页" height="2.4rem" fontsize="1rem">
            <!-- <router-link to="#" slot="left">
                <yd-icon name="shopcart-outline" size="1.2rem" color="#09BB07"></yd-icon>
            </router-link> -->
            <router-link to="#" slot="right">
                <yd-icon name="search" size="1.2rem" color="#09BB07"></yd-icon>
            </router-link>
        </yd-navbar>
        <con-view>
          <vue-scroll
              :refreshStart='refreshStart'
              :loadStart='loadStart'
              :noData='true'
          >
            <div>
              <span>请尝试手指向下滑动~</span>
              <ul>
                  <li>list------1</li>
                  <li>list------2</li>
                  <li>list------3</li>
                  <li>list------4</li>
                  <li>list------5</li>
                  <li>list------6</li>
                  <li>list------7</li>
                  <li>list------8</li>
              </ul>
            </div>
          </vue-scroll>
        </con-view>
    </div>
</template>
<script>
import VueScroll from '@common/VueScroll'
import ConView from '@common/ConView'
export default {
  components: {
    VueScroll,
    ConView
  },
  methods: {
    // 刷新开始
    refreshStart (done) {
      setTimeout(() => {
        // 这里写 ajax 业务请求，在数据请求到后执行 done() 关闭动画
        done()
      }, 1600)
    },
    // 加载开始
    loadStart (done) {
      setTimeout(() => {
        // 这里写 ajax 业务请求，在数据请求到后执行 done() 关闭动画
        done()
      }, 1600)
    }
  },
  mounted () {
    this.$store.state.botNav.activeHome = true
  },
  destroyed () {
    this.$store.state.botNav.activeHome = false
  }
}
</script>
<style scoped>
  .rl-child{
    padding: 20px 0;
  }
</style>
