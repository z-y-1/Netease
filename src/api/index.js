import ajax from './ajax'

export const getNavList = () => ajax({
    url:'/navlist'
});

export const getSwiperImg = ()=> ajax({
    url:'/swiperimg'
})
export const getCateNavDatas = ()=> ajax({
    url:'/catenavdatas'
})
export const getCateListsDatas = ()=> ajax({
    url:'/catelistsdatas'
})