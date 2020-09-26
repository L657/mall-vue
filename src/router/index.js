import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import('../views/home/Home.vue')
const Category = () =>import('../views/category/Category.vue')
const Cart = () =>import('../views/cart/Cart.vue')
const Profile = () =>import('../views/profile/Profile.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/cart',
        component: Cart
        
    },
    {
        path:'/profile',
        component: Profile
        
    },
    {
        path:'/category',
        component: Category
        
    },
    {
        path:'/home',
        component: Home
        
    }
]
const router = new VueRouter({
    routes
})

// 3. 导出
export default router
