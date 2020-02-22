<template>
  <div id="searchContainer">
    <div class="header">
      <div class="iptContainer" v-if="hotWorldDatas && hotWorldDatas.defaultKeywords">
        <div class="glass iconfont icon-sousuolanfadajing"></div>
        <input type="text" :placeholder="hotWorldDatas.defaultKeywords[parseInt(Math.random()*(31),10)].keyword">
      </div>
      <span class="cancle" @click="cancle">
        取消
      </span>
    </div>
    <div class="content">
      <header class="title">
        热门搜索
      </header>
      <div class="navList" v-if="hotWorldDatas">
        <a href="" class="item" v-for="(item,index) in hotWorldDatas.hotKeywordVOList" :key="index">{{item.keyword}}</a>
        <!-- <a href="" class="item">疫情上新快报</a>
        <a href="" class="item">疫情上新快报</a>
        <a href="" class="item">疫情上新快报</a>
        <a href="" class="item">疫情上新快报</a>
        <a href="" class="item">疫情上新快报</a>
        <a href="" class="item">疫情上新快报</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  // data(){
  //   return {
  //     i:0
  //   }
  // },
  beforeCreate(){
    this.$store.dispatch('getHotWorldDatasAction')
    console.log(this.$store.state.hotWorldDatas,this.$store.state);
    
  },
  computed:{
    ...mapState({
      hotWorldDatas: state => state.hotWorldDatas.data
    })
  },
  methods:{
    cancle(){
      this.$router.back(-1)
    }
  }
  
}
</script>

<style lang="stylus" scoped>
  body
    background-color #eee
    #searchContainer
      .header
        width 100%
        height 88px
        padding 0 30px
        box-sizing border-box
        line-height 88px 
        background-color #fff
        // position relative
        .iptContainer
          margin 14px 0
          width 604px
          height 56px
          background-color #f4f4f4
          padding 0 20px
          box-sizing border-box
          float left
          position relative
          .glass
            width 16px
            height 16px
            position absolute
            left 18px
            top -15px
          input 
            background-color #f4f4f4
            width 520px
            height 39px
            position absolute
            right 20px
            top 12px
            font-size 28px
            border none
            outline none 
        .cancle 
          font-size 28px
          color #333
          margin-left 30px
      .content 
        width 100%
        height 436px
        padding 0 30px 30px
        background-color #fff
        margin-bottom 20px
        box-sizing border-box
        .title 
          width 690px
          height 90px
          margin 0 auto
          color #999
          font-size 28px
          line-height 90px
        .navList
          width 720px
          height 316px
          .item
            color #DD1A21
            float left
            border 2px solid #999
            border-radius 4px
            line-height 46px
            padding 0 15px
            margin 0 32px 32px 0
</style>