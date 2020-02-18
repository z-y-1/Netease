<template>
  <div id="footerContainer">
      <div class="guideItem" @click="goTo('/home')">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
      </div>
      <div class="guideItem" @click="goTo('/classify')">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
      </div>
      <div class="guideItem" @click="goTo('/buy')">
          <i class="iconfont icon-zhidemai"></i>
          <span>值得买</span>
      </div>
      <div class="guideItem" @click="goTo('/cart')">
          <i class="iconfont icon-qicheqianlian-"></i>
          <span>购物车</span>
      </div>
      <div class="guideItem" @click="goTo('/myself')">
          <i class="iconfont icon-profile"></i>
          <span>我的</span>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goTo(path){
            path !== this.$route.path && this.$router.push(path)
        }
    }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
    #footerContainer
        display flex
        justify-content space-around
        width 100%
        height 98px
        position fixed
        left 0
        bottom 0
        background #ffffff
        // line-height 98px
        .guideItem
            margin-top 24px
            line-height 35px
            height 71px
            text-align center
            display flex
            flex-direction column
            
            

            
</style>