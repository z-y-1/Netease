import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import  Buy from '../pages/Buy/Buy.vue'
import Myself from '../pages/Myself/Myself.vue'

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
        component:Classify
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
        path:'/',
        component:Home
    }
    
]