import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import  Buy from '../pages/Buy/Buy.vue'
import Myself from '../pages/Myself/Myself.vue'
import ClassifyDetail from '../pages/Classify/ClassifyDetail/ClassifyDetail.vue'
import Search from '../pages/Search/Search.vue'
export default [
	{
        path:'/home',
        component:Home
    },
	{
        path:'/cart',
        component:Cart
    },
	{
        path:'/classify',
        component:Classify,
        children:[
            {
                path:'/classify/item/:id',
                component:ClassifyDetail
            }
        ]
    },
	{
        path:'/buy',
        component:Buy
    },
	{
        path:'/myself',
        component:Myself
    },
	{
        path:'/home',
        redirect:'/search'
    },
    {
        path:'/search',
        component:Search
    }
    
]