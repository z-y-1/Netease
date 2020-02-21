import {
    SAVE_NAVLIST,
    SAVE_SWIPERDATA,
    SAVE_CATENAVDATAS,
    SAVE_CATELISTSDATAS
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
    }
}