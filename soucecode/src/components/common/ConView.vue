<template>
    <div id="con-view" :style="{'transform':'translate3d(0px, ' + touchYNum +'px, 0px)'}" ref="conView" @touchmove="touchmove" @touchstart="touchmove" @touchend="touchmove">
        <div class="conText" :style="{'height':touchYNum + 'px',top:'-' + conTop + 'px'}">由启迪中航讯提供技术支持</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    noText: {
      default: false
    },
    hasTopNav: {
      default: true
    },
    hasBtoNav: {
      default: true
    }
  },
  methods: {
    touchmove () {
      if (this.noText) { return }
      let moveY = null
      if (event.type === 'touchstart') {
        this.startY = event.changedTouches[0].pageY
      } else if (event.type === 'touchend') {
        this.touchYNum = 0
        this.conTop = 20
      } else if (event.type === 'touchmove') {
        moveY = event.changedTouches[0].pageY
        const touchY = moveY - this.startY
        if (touchY > 0 && touchY < 1000) {
          this.touchYNum = touchY
          this.conTop = touchY
        }
      }
    },
    setHeight () {
      const winH = window.screen.availHeight
      let tNavH = 0
      let bNavH = 0
      if (this.hasTopNav) {
        tNavH = document.getElementsByClassName('yd-navbar')[0].offsetHeight
      }
      if (this.hasBtoNav) {
        bNavH = document.getElementsByClassName('yd-tabbar')[0].offsetHeight
      }
      document.getElementById('con-view').style.height = winH - tNavH - bNavH + 'px'
    }
  },
  mounted () {
    this.setHeight()
    window.onresize = () => {
      this.setHeight()
    }
  },
  data () {
    return {
      touchYNum: 0,
      startY: 0,
      conTop: 20
    }
  }
}
</script>
<style scoped>
  .conText {
    position: absolute;
    width: 100%;
    background-color: #ffffff;
    top: -10px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    color: #999999;
  }
</style>
