<template>
  <div id="classfyPageContainer">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-sousuolanfadajing"></i>
        <span>搜索商品, 共20266款好物</span>
      </div>
    </div>
    <div class="navList">
      <ul class="navItem">
        <li class="item" v-for="(item,index) in cateNavDatas.categoryL1List" :key="index" @click="toId($event,item.id,index)" :class="{active:index === targetIndex}">
          <div class="txt"> 
              {{item.name}}
          </div>
        </li>
      </ul>
    </div>
    <ClassifyDetail/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ClassifyDetail from './ClassifyDetail/ClassifyDetail'
export default {
  data(){
    return {
      targetIndex:null
    }
  },
  components:{
    ClassifyDetail
  },
  beforeCreate(){
    this.$store.dispatch('getCateNavDatasAction')
    
  },
  computed:{
    ...mapState({
      cateNavDatas: state => state.cateNavDatas
    })
  },
  methods:{
    toId(e,id,index){
      this.$router.replace('/classify/item/'+ id)
      this.$store.state.id = this.$route.params.id
      console.log(e);
      this.targetIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  #classfyPageContainer
    .header
      padding 0 30px
      box-sizing border-box
      width 100%
      height 88px
      position relative
      overflow hidden
      .search
          width 690px
          height 56px
          background #ededed
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto auto
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
    .navList
      width 162px
      height 1120px
      .navItem
        width 100%
        height 1120px
        padding 40px 0
        .item
          width 162px
          height 50px
          text-align center
          line-height 50px
          margin-top 40px
          .txt 
            color #333
            font-size 28px
        .item:first-child
          margin-top 0
        .item.active
          .txt
            color #dd1a21
            position relative
            &:after
              content ''
              position absolute
              left 16px
              bottom 0
              width 130px
              height 4px
              background-color #dd1a21
</style>