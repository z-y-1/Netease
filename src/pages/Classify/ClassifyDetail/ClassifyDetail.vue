<template>
  <div id="navDetailContainer">
    <img src="../../../common/img/chaozhibaopin.webp" alt="">
    <div v-for="(item,index) in cateListsDatas" :key="index" class="item">
      <div v-if="item.id == id">
        <div class="thumbnail" v-for="(ware,index) in item.categoryList || item.subCateList" :key="index">
          <img :src="ware.wapBannerUrl" alt="">
          <span>{{ware.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  // data(){
  //   return {
  //     id:0
  //   }
  // },
  beforeCreate(){
    this.$store.dispatch('getCateListsDatasAction')
    //切换后也可默认选中推荐专区
      this.$router.replace('/classify/item/11')
      this.$store.state.id = this.$route.params.id
     
    
  },
  updated(){
    console.log(this.$route.params.id,this.id);
  },
  computed:{
    ...mapState({
      cateListsDatas: state=> state.cateListsDatas
    }),
    ...mapState({
      id: state=> state.id
    })
  }
}
</script>

<style lang="stylus" scoped>
  #navDetailContainer
    height 1148px
    width 588px
    position absolute
    right 0
    bottom 98px
    padding 30px 30px 21px
    box-sizing border-box
    img 
      width 528px
      height 192px
    .item
      div
        .thumbnail
          float left
          margin-right 33px
          &:nth-child(3n)
            margin-right 0
          // &:nth-child(6)
          //   margin-right 0
          img 
            width 144px
            height 144px
          span 
            display block
            width 144px
            height 72px
            text-align center
            line-height 36px
            font-size 24px
            
</style>