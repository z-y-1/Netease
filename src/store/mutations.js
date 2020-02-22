import {
    SAVE_NAVLIST,
    SAVE_SWIPERDATA,
    SAVE_CATENAVDATAS,
    SAVE_CATELISTSDATAS,
    SAVE_HOTWORLDDATAS
} from './mutations-type'


export default{
    [SAVE_NAVLIST] (state,navData) {
        state.navData = navData
    },
    [SAVE_SWIPERDATA] (state,swiperData){
        state.swiperData = swiperData
    },
    [SAVE_CATENAVDATAS] (state,cateNavDatas){
        state.cateNavDatas = cateNavDatas
    },
    [SAVE_CATELISTSDATAS] (state,cateListsDatas){
        state.cateListsDatas = cateListsDatas
    },
    [SAVE_HOTWORLDDATAS] (state,hotWorldDatas){
        state.hotWorldDatas = hotWorldDatas
    },
    
}