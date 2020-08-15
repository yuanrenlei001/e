import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import share from '@/components/share/index'
import user from '@/components/user/index'
import news from '@/components/news/index'
import detail from '@/components/news/detail'
import food from '@/components/shopping/index'
import foodDetail from '@/components/shopping/detail'
import order from '@/components/user/order'
import coupon from '@/components/user/coupon'
import information from '@/components/user/information'
import address from '@/components/user/address'
import add from '@/components/user/add'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index , meta: {title: 'e游张村'}},
    {path: '/share', name: 'share', component: share , meta: {title: '晒一晒'}},
    {path: '/user', name: 'user', component: user , meta: {title: '晒一晒'}},
    {path: '/news', name: 'news', component: news , meta: {title: '张村故事'}},
    {path: '/detail', name: 'detail', component: detail , meta: {title: '故事详情'}},
    {path: '/food', name: 'food', component: food , meta: {title: '进村逛逛'}},
    {path: '/foodDetail', name: 'foodDetail', component: foodDetail , meta: {title: '逛逛详情'}},
    {path: '/order', name: 'order', component: order , meta: {title: '订单详情'}},
    {path: '/coupon', name: 'coupon', component: coupon , meta: {title: '优惠卷'}},
    {path: '/information', name: 'information', component: information , meta: {title: '个人信息'}},
    {path: '/address', name: 'address', component: address , meta: {title: '收货地址'}},
    {path: '/add', name: 'add', component: add , meta: {title: '新增收货地址'}},
  ]
})
