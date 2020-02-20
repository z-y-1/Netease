import ajax from './ajax'

export const getNavList = () => ajax({
    url:'/navlist'
});

export const getSwiperImg = ()=> ajax({
    url:'/swiperimg'
})