<template>
  <div id="homePageContainer">
      <div class="header">
        <a href="" class="logo"></a>
        <div class="search">
          <i class="iconfont icon-sousuolanfadajing"></i>
          <span>搜索商品, 共20266款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="navList">
        <div class="tab active">
          <span>推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
        <div class="tab">
          <span>推荐推荐</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  #homePageContainer
    .header
      width 750px
      height 88px
      // background-color blue
      display flex
      justify-content space-around
      padding 16px 30px
      box-sizing border-box
      align-items center
      .logo
        margin-right 20px
        display inline-block
        height 40px
        width 138px
        background-image url('../../common/img/wangyiyanxuan.webp')
        background-size cover
      .search
        width 442px
        height 56px
        background #ededed
        border-radius 8px 
        display flex
        justify-content center
        align-items center
        span 
          color #666
          font-family PingFangSC-Light,helvetica,'Heiti SC'
          font-size 28px
        i 
          display inline-block
          height 28px
          width 28px
          margin-right 10px
      .loginBtn
        height 40px
        width 74px
        border 1.1px solid #DD1A21
        box-sizing border-box
        border-radius 8px
        text-align center
        line-height 40px
        color #DD1A21
        font-family PingFangSC-Light,helvetica,'Heiti SC'
        font-size 24px
        margin-left 16px
    .navList
      display flex
      padding 0 30px
      white-space nowrap
      flex-flow row nowrap
      // justify-content space-between
      .tab
        span
          box-sizing border-box
          display block
          // width 144px 
          height 60px
          color #333
          font-size 28px
          font-family PingFangSC-Light,helvetica,'Heiti SC'
          padding 0px 16px
          text-align center
          line-height 60px
        &.active
          span 
            transform translate(0px, 0px) translateZ(0px)
            position relative
            color #DD1A21
            &:after
              content ''
              width 100%
              position absolute
              left 0 
              bottom 0
              background-color #DD1A21
              height 6px

</style>