import {
    getNavList,
    getSwiperImg,
    getCateNavDatas,
    getCateListsDatas,
    getHotWorldDatas
} from '../api'
import {
    SAVE_NAVLIST,
    SAVE_SWIPERDATA,
    SAVE_CATENAVDATAS,
    SAVE_CATELISTSDATAS,
    SAVE_HOTWORLDDATAS
} from './mutations-type'

export default{
    async getNavListAction({commit}){
        let result = await getNavList()
        commit(SAVE_NAVLIST,result.data)
    },
    async getSwiperImgAction({commit},fn){
        let result = await getSwiperImg()
        commit(SAVE_SWIPERDATA,result.data)
        fn()
    },
    async getCateNavDatasAction({commit}){
        let result = await getCateNavDatas()
        commit(SAVE_CATENAVDATAS,result.data)
    },
    async getCateListsDatasAction({commit}){
        let result = await getCateListsDatas()
        commit(SAVE_CATELISTSDATAS,result.data)
    },
    async getHotWorldDatasAction({commit}){
        let result = await getHotWorldDatas()
        commit(SAVE_HOTWORLDDATAS,result.data)
    },
    
}