import ajax from './ajax'

export const getNavList = () => ajax({
    url:'/api/navlist'
});

export const getSwiperImg = ()=> ajax({
    url:'/api/swiperimg'
})
export const getCateNavDatas = ()=> ajax({
    url:'/api/catenavdatas'
})
export const getCateListsDatas = ()=> ajax({
    url:'/api/catelistsdatas'
})
export const getHotWorldDatas = ()=> ajax({
    url:'/foo/xhr/search/init.json',
    method:"POST"
})