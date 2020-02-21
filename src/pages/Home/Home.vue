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
      <NavAll v-if="isShowNavAll" />
      <div class="nav">
        <div class="navList" v-show="!isShowNavAll">
          <div class="navContainer">
            <div class="tab active">
              <span>推荐</span>
            </div>
            <div class="tab" v-for="(item,index) in navData" :key="index" @click="isClick(index)" :class="{active: index === targetIndex}">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        <div class="linner"></div>
        <div class="arrows" @click="unfold">
          <div class="arrowsIcon"></div>
        </div>
      </div> 
      
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperData.focusList" :key="index"><img :src="item.picUrl" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <ul class="public-msg">
        <li v-for="(item,index) in swiperData.policyDescList" :key="index" class="msg-item">
          <img :src="item.icon" alt="">
          <span>{{item.desc}}</span>
        </li>
      </ul>
      <div class="ad-nav" v-if="swiperData.kingKongModule">
        <a :href="item.schemeUrl" class="ad-item" v-for="(item,index) in swiperData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </a>
      </div>
      <div class="index-ad" v-if="swiperData.bigPromotionModule">
        <a :href="swiperData.bigPromotionModule.floorList[0].cells[0].schemeUrl" class="ad-one">
          <img :src="swiperData.bigPromotionModule.floorList[0].cells[0].picUrl" alt="">
        </a>
        <a :href="swiperData.bigPromotionModule.floorList[1].cells[0].schemeUrl" class="ad-two">
          <img :src="swiperData.bigPromotionModule.floorList[1].cells[0].picUrl" alt="">
        </a>
        <a :href="swiperData.bigPromotionModule.floorList[2].cells[0].schemeUrl" class="ad-item">
          <img :src="swiperData.bigPromotionModule.floorList[2].cells[0].picUrl" alt="">
        </a>
        <a :href="swiperData.bigPromotionModule.floorList[2].cells[1].schemeUrl" class="ad-item">
          <img :src="swiperData.bigPromotionModule.floorList[2].cells[1].picUrl" alt="">
        </a>
        <a :href="swiperData.bigPromotionModule.floorList[3].cells[0].schemeUrl" class="ad-item">
          <img :src="swiperData.bigPromotionModule.floorList[3].cells[0].picUrl" alt="">
        </a>
        <a :href="swiperData.bigPromotionModule.floorList[3].cells[1].schemeUrl" class="ad-item">
          <img :src="swiperData.bigPromotionModule.floorList[3].cells[1].picUrl" alt="">
        </a>
      </div>
      <div class="new-exclusive">
        <div class="new-exclusive-title">新人专享礼</div>
        <div class="new-exclusive-content">
          <a href="" class="left">
            <div class="txt">新人专享礼包</div>
            <img src="../../common/img/hongbao.png" alt="">
          </a>
          <a href="" class="right-top">
            <span class="txt1">福利社</span>
            <span class="txt2">今日特价</span>
            <div class="price-circle">
              <div class="line1">￥189</div>
              <div class="line2">￥240</div>
            </div>
            <img src="../../common/img/yashua.webp" alt="">
          </a>
          <a href="" class="right-bottom">
            <div class="txt1">新人拼团</div>
            <div class="txt2">1元起包邮</div>
          </a>
        </div>
        
      </div>
      <div class="hotSaleContainer">
        <div class="title">
          <span>
            类目热销榜
          </span>
        </div>
        <div class="left-ad">
          <span>热销榜</span>
          <div class="line"></div>
          <img src="../../common/img/lishen.webp" alt="">
        </div>
        <div class="right-ad">
          <span>好评榜</span>
          <div class="line"></div>
          <img src="../../common/img/chongdianbao.webp" alt="">
        </div>
        <div class="adList" v-if="swiperData.categoryHotSellModule">
          <a href="" class="ad-item" v-for="(item,index) in adItemData" :key="index">
            <div class="name">{{item.categoryName}}</div>
            <img :src="item.showPicUrl" alt="">
          </a>
        </div>
      </div>
      <div class="flashSale">
        <div class="title">
          <span class="txt">限时购</span>
          <span class="time">00</span>:
          <span class="time">00</span>:
          <span class="time">00</span>
          <span class="more">更多></span>
        </div>
        <div class="container">
          <a href="" class="item">
            <img src="../../common/img/shexiangji.webp" alt="">
            <span class="newPrice">
              ￥1129
            </span>
            <span class="oldPrice">
              ￥1200
            </span>
          </a>
          <a href="" class="item">
            <img src="../../common/img/shexiangji.webp" alt="">
            <span class="newPrice">
              ￥1129
            </span>
            <span class="oldPrice">
              ￥1200
            </span>
          </a>
          <a href="" class="item">
            <img src="../../common/img/shexiangji.webp" alt="">
            <span class="newPrice">
              ￥1129
            </span>
            <span class="oldPrice">
              ￥1200
            </span>
          </a>
          <a href="" class="item">
            <img src="../../common/img/shexiangji.webp" alt="">
            <span class="newPrice">
              ￥1129
            </span>
            <span class="oldPrice">
              ￥1200
            </span>
          </a>
          <a href="" class="item">
            <img src="../../common/img/shexiangji.webp" alt="">
            <span class="newPrice">
              ￥1129
            </span>
            <span class="oldPrice">
              ￥1200
            </span>
          </a>
          <a href="" class="item">
            <img src="../../common/img/shexiangji.webp" alt="">
            <span class="newPrice">
              ￥1129
            </span>
            <span class="oldPrice">
              ￥1200
            </span>
          </a>
        </div>
      </div>
      <div class="newArrival">
        <div class="title">
          <span class="txt">新品首发</span>
          <span class="more">更多></span>
        </div>
        <div class="container">
          <div class="item" v-for="(item,index) in swiperData.newItemList" :key="index">
            <a href="">
              <img :src="item.listPicUrl" alt="">
              <span>{{item.name}}</span>
              <span class="price">59</span>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom-ad">
        <a href="" class="item" v-for="(item,index) in swiperData.sceneLightShoppingGuideModule" :key="index">
          <span class="txt1">{{item.styleItem.title}}</span>
          <span class="txt2">{{item.styleItem.desc}}</span>
          <img :src="item.styleItem.picUrlList[0]" alt="" class="one">
          <img :src="item.styleItem.picUrlList[1]" alt="" class="two">
        </a>
      </div>
      <div class="bottom-generalize">
        <div class="down">
          <a href="" class="app">下载APP</a>
          <a href="" class="com">电脑版</a>
        </div>
        <div class="copyRight">
          <div>网易公司版权所有 © 1997-2020</div>
          <div>食品经营许可证：JY13301080111719</div>
        </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import {mapState} from 'vuex' 
import NavAll from '../../components/NavAll/NavAll'
export default {
  components:{
    NavAll
  },
  data(){
    return {
      isShowNavAll:false,
      targetIndex:null
    }
  },
  async beforeMount(){
    this.$store.dispatch('getNavListAction')
    this.$store.dispatch('getSwiperImgAction',()=>{
      this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              type:'progressbar',
              progressbarOpposite: true
            },
            loop: true,
          })
        })
    })
  },
  
  mounted(){
    new BScroll('.navList',{
      scrollY:false,
      scrollX:true,
      click:false
    });
  },
  computed:{
    ...mapState({
      navData: state=> state.navData
    }),
    ...mapState({
      swiperData: state=> state.swiperData
    }),
    adItemData(){
      let result = this.$store.state.swiperData.categoryHotSellModule.categoryList;
      result.splice(0,2)
      return result
    }
    
  },
  methods:{
    unfold (){
      this.$data.isShowNavAll = !this.$data.isShowNavAll
      console.log(this.$data.isShowNavAll);
    },
    isClick(index){
      this.trargetIndex = index
    }
  }
  // watch: {
  //     // 解决swiper滑动方式一
  //     categorys(){
  //       // $nextTick 保证下一次组件加载完毕执行
  //       this.$nextTick(() => {
  //         new Swiper('.swiper-container', {
  //           pagination: {
  //             el: '.swiper-pagination',
  //           },
  //           loop: true
  //         })
  //       })
  //     }
  //   }
}
</script>

<style lang="stylus" scoped>
  #homePageContainer
    // overflow hidden
    width 100%
    // height 10000px
    overflow hidden
    background #eee
    .header
      width 750px
      height 88px
      background-color #fff
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
    .nav
      position relative
      overflow hidden
      background-color #fff
      .navList 
        float left
        overflow hidden
        width 590px
        touch-action: none
        .navContainer
          float left
          width 1460px
          height 60px
          line-height 60px
          padding 0 30px
        .tab
          float left
          span 
            display block
            height 60px
            padding 0 16px
            font-size 28px
            margin-right 20px
            box-sizing border-box
            position relative
        .tab.active
          span 
            color #dd1a21
            &:after
              content ''
              position absolute
              left 0
              bottom 0
              width 100px
              height 4px
              background-color #dd1a21
      .linner
        float left
        width 60px
        height 60px
      .arrows
        float left
        width 100px
        height 60px
        z-index 99
        position absolute
        right 0
        top 0
        .arrowsIcon
          width 30px
          height 30px
          margin 20px auto 
          background-image url('../../common/img/arrows.webp')
          background-size 100% 100%
    .swiper-container
      width 100%
      height 370px
      background-color #fff
      .swiper-wrapper
        width 100%
        height 370px
        .swiper-slide
          width 100%
          height 100%
          img 
            width 100%
            height 100%
    .public-msg
      width 100%
      height 72px
      padding 0 30px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      background-color #fff
      li
        img 
          vertical-align:middle
          width 32px
          height 32px
    .ad-nav
      width 100%
      // height 341px
      padding-bottom 32px
      overflow hidden
      background-color #fff
      a
        float left
        display flex
        flex-direction column
        margin 10px 20px 9px
        img 
          width 110px
          height 110px
        span 
          color #333
          vertical-align:middle
          margin 15px 0px 10px 10px
    .index-ad
      width 100%
      background-color #1674e3
      overflow hidden
      .ad-one
        width 100%
        height 240px
        display block
        img 
          width 100%
      .ad-two
        width 100%
        display block
        img 
          width 100%
      .ad-item
        display block
        float left
        img 
          width 351px
          height 186px
          margin 10px 12px
    .new-exclusive
      background-color white
      margin-top 20px
      .new-exclusive-title
        width 100%
        height 90px
        color #333
        font-size 32px
        font-family PingFangSC-Regular
        text-align center
        line-height 90px
        padding 0 30px
        box-sizing border-box
      .new-exclusive-content
        width 100%
        height 438px
        padding 0 0 0 30px
        overflow hidden
        .left
          float left
          display block
          width 343px
          height 434px
          position relative
          background-color #F9E9CF
          .txt
            width 343px
            height 78px
            padding 30px 0 0 30px
            color #333
            font-size 32px
            font-family PingFangSC-Regular
          img 
            position absolute
            left 0
            right 0
            top 0px
            bottom 0
            margin auto 
            width 258px
            height 257px
        .right-top
          position relative
          display block
          float left
          width 343px
          height 215px
          background-color #FBE2D3
          padding 20px 0 0 30px
          box-sizing border-box
          margin-left 5px
          .txt1
            font-size 32px
            color #333
            display block
          .txt2
            display block
            line-height 39px
          .price-circle
            z-index 2
            top 14px
            right 25px
            position absolute
            width 80px
            height 80px
            padding 10px 0 0 
            box-sizing border-box
            border-radius 50%
            background-color #f59524
            .line1
              font-size 24px
              color #ffffff
              text-align center
            .line2
              font-size 10px
              text-decoration line-through  
              color #ffffff
              text-align center
              font-family PingFangSC-Light,helvetica,'Heiti SC'
          img
            position absolute
            right 0
            bottom 0 
            width 200px
            height 200px
        .right-bottom
          display block
          margin-left 4px
          margin-top 4px
          float left
          width 343px
          height 215px
          padding 20px 0 0 30px
          box-sizing border-box
          background-color #FFECC2
          .txt1
            color #333
            font-size 32px
          .txt2
            background-color #cbb693
            color #ffffff
            display inline-block
            padding 0 8px
            margin-top 8px
            box-sizing border-box
            border-radius 4px
            font-family PingFangSC-Light,helvetica,'Heiti SC'
    .hotSaleContainer
      overflow hidden
      background-color #fff
      width 100%
      padding 0 20px 20px 30px
      box-sizing border-box
      .title
        width 100%
        height 100px
        background-color #ffffff
        padding 0 30px
        box-sizing border-box
        line-height 100px
        font-size 32px
      .left-ad
        float left
        position relative
        width 340px
        height 200px
        background-color #F9F3E4
        margin 0 10px 10px 0
        span 
          position absolute
          top 30%
          left 20px
          color #333
          font-size 28px
        .line
          position absolute
          top 55%
          left 20px
          width 48px
          height 2px
          border 1px solid black 
          background-color black 
        img
          position absolute 
          top 0px
          right 0
          float left
          width 200px
          height 200px
      .right-ad
        float left
        position relative
        width 340px
        height 200px
        background-color #EBEFF6
        margin 0 10px 10px 0
        span 
          position absolute
          top 30%
          left 20px
          color #333
          font-size 28px
        .line
          position absolute
          top 55%
          left 20px
          width 48px
          height 2px
          border 1px solid black 
          background-color black 
        img
          position absolute 
          top 0px
          right 0
          float left
          width 200px
          height 200px
      .adList
        .ad-item
          display block
          float left
          width 165px
          height 180px
          text-align center
          color #333
          background-color #F5F5F5
          margin 0 10px 10px 0
          img
            width 120px
            height 120px
    .flashSale
      width 100%
      .title 
        width 100%
        height 100px
        background-color #fff
        padding 0 30px
        box-sizing border-box
        line-height 100px
        span 
          // margin-top 25px
        .txt 
          font-size 32px
          color #333
          margin-top 25px
        .time 
          display inline-block
          width 32px
          height 32px
          line-height 32px
          color #ffffff
          margin  20px 10px
          background-color #333
        .more
          float right
          font-size 28px
      .container 
        padding 0 10px 0 30px
        box-sizing border-box
        background-color #fff
        overflow hidden
        a
          display block
          float left
          width 216px
          height 300px
          margin-right 20px
          // margin-bottom 10px
          margin-top 10px
          padding 0 0 30px
          box-sizing border-box
          // background-color #fff
          img  
            width 216px
            height 216px
    .newArrival
      width 100%
      .title 
        padding 0 30px
        box-sizing border-box
        width 100%
        height 100px
        line-height 100px
        font-size 32px
        background-color #fff
      .more
        float right
      .container 
        // overflow hidden
        display flex
        flex-wrap wrap
        justify-content space-around
        background-color #fff
        .item
          width 216px
          height 400px
          padding 0 0 13px
          margin 0 0 0 20px
          box-sizing border-box
          a
            img
              width 216px
              height 216px
            span 
              color #333
              font-size 24px
              margin-top 10px
              display block
            .price
              color #DD1A21
              font-size 32px
    .bottom-ad
      width 100%
      height 576px
      padding 10px 30px 30px 26px
      box-sizing border-box
      margin 0 0 20px
      background-color #fff
      .item
        float left
        display block
        width 343px
        height 264px
        background-color #eee
        padding 20px 0 0 20px
        margin 4px 0 0 4px
        box-sizing border-box
        position relative
        img
          width 150px
          height 150px
          float left 
        .txt1
          font-size 32px
          display block
          color #333
        .txt2
          display block
          margin-top 10px
    .bottom-generalize
      width 100%
      height 344px
      background-color #414141
      padding 54px 20px 28px
      box-sizing border-box
      .down
        text-align center
        margin-bottom 36px
        a
          display inline-block
          width 172px
          height 62px
          line-height 62px
          border 1px solid #999
          color white
          // border-radius 2px
        .app
          margin-right 50px
      .copyRight
        text-align center
        color #999999







        


          
        
      






   
</style>