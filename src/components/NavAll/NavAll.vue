<template>
  <div id="mask">
      <div class="content">
        <div class="title">
          全部频道
        </div>
        <div class="navList">
          <div class="item">推荐</div>
          <div class="item" v-for="(item,index) in navData" :key="index">
            {{item.name}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex' 
  export default {
    beforeCreate(){
      this.$store.dispatch('getNavListAction')
    },
    computed:{
      ...mapState({
        navData: state=> state.navData
      })
    }
  }
</script>

<style lang="stylus">
  #mask
    height 1334px
    width 100%
    background rgba(0,0,0,0.5)
    position absolute
    left 0
    top 88px
    z-index 2
    .content
      width 100%
      height 372px
      background-color #fff
      .title
        width 100%
        height 60px
        color #333
        font-size 28px
        line-height 60px
        padding-left 30px
        box-sizing border-box
      .navList
        padding-top 30px
        box-sizing border-box
        overflow hidden
        .item
          width 150px
          height 56px
          font-size 24px
          float left
          color #333
          text-align center
          line-height 56px
          background-color #fafafa
          margin 0 0 40px 30px

</style>