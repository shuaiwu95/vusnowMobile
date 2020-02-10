<template>
<keep-alive :include="cachedViews">
   <router-view />
</keep-alive>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  methods: {
    initRem () {
      const html = document.querySelector('html')
      const { width } = html.getBoundingClientRect()
      html.style.fontSize = `${width / 50}px`
    },
    addViewToVisided () {
      const thisRoute = this.$route.meta.isCache ? this.$route : null
      if (thisRoute) this.$store.dispatch('views/addVisitedViews', { route: thisRoute })
    }
  },
  watch: {
    $route () {
      this.addViewToVisided()
    }
  },
  computed: {
    ...mapGetters('views', { // views.js里面的getters
      cachedViews: 'cachedViews'
    })
  },
  mounted () {
    // this.initRem()
    // window.onresize = () => {
    //   this.initRem()
    // }
    this.addViewToVisided()
  }
}
</script>

<style>
@import url('./assets/styles/iconFont.css');
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
@font-face {
  font-family: 'iconfontMyself';  /* project id 1589910 */
  src: url('//at.alicdn.com/t/font_1589910_mlsvp2vz4x.eot');
  src: url('//at.alicdn.com/t/font_1589910_mlsvp2vz4x.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1589910_mlsvp2vz4x.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1589910_mlsvp2vz4x.woff') format('woff'),
  url('//at.alicdn.com/t/font_1589910_mlsvp2vz4x.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1589910_mlsvp2vz4x.svg#iconfont') format('svg');
}
[class^="icon-custom-"]:before, [class*=" icon-custom-"]:before {
  font-family: 'iconfontMyself';
}

.icon-custom-tjfx:before {
  content: '\e606';
}
.icon-custom-gzt:before {
  content: '\e607';
}
.icon-custom-wd:before {
  content: '\E609';
}
</style>
