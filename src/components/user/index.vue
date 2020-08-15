<template>
    <div class="container">
        <img class="top" src="@/assets/user/userbg.jpg" alt="">
        <div class="main">
            <div class="header">
                <div class="headerTop">
                    <div class="userImg"><img  src="@/assets/user/userbg.jpg" alt=""></div>
                    <div class="userName">张三丰</div>
                    <div class="userText">已成为张村村民第<span>108</span>天</div>
                    <div class="code"><img  src="@/assets/user/code.png" alt=""></div>
                </div>
                <div class="headerBottom">
                    <div><p>1234</p><p>积分</p></div>
                    <div><p>1234</p><p>喜欢</p></div>
                    <div><p>1234</p><p>收藏</p></div>
                    <div><p>1234</p><p>足迹</p></div>
                </div>
            </div>
            <div class="sort">
                <router-link class="sortLink" to="/order" ><div><img  src="@/assets/user/icon01.png" alt=""></div><div class="text">待付款</div><span>12</span></router-link>
                <router-link class="sortLink" to="/order" ><div><img  src="@/assets/user/icon02.png" alt=""></div><div class="text">待消费</div></router-link>
                <router-link class="sortLink" to="/coupon" ><div><img  src="@/assets/user/icon03.png" alt=""></div><div class="text">优惠券</div></router-link>
                <router-link class="sortLink" to="/order" ><div><img  src="@/assets/user/icon04.png" alt=""></div><div class="text">退款/售后</div></router-link>
            </div>
            <div class="link">
                <router-link class="tabLink" to="/information" ><img  src="@/assets/user/icon05.png" alt="">个人信息 <img  src="@/assets/right.png" alt=""></router-link>
                <router-link class="tabLink" to="/address" ><img  src="@/assets/user/icon06.png" alt="">收货地址 <img  src="@/assets/right.png" alt=""></router-link>
                <router-link class="tabLink" to="/" ><img  src="@/assets/user/icon07.png" alt="">投诉建议 <img  src="@/assets/right.png" alt=""></router-link>
            </div>
        </div>

        <minShopBar v-if="showMinShopTab" />
    </div>
</template>


<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                showMinShopTab: true,
            }
        },
        components: {
            minShopBar
        },
        mounted(){
        },
        beforeCreate(){
            window.document.body.style.backgroundColor = '#f5f6f8'
        },
        beforeDestroy(){
            window.document.body.style.backgroundColor = ''
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html, body, #app {background: #f5f6f8;}
    .top {position: fixed;z-index: 0;top:0;left:50%;width: 7.5rem;height:2.5rem;margin-left: -3.75rem;}
    .main {padding: 0 .24rem;}
    .header {width: 100%;height:3.2rem;position: relative;top:1.14rem;}
    .headerTop {position: relative;background: #fff;height:2rem;width: 100%;text-align: center;border-bottom: 1px solid #f0f0f0;
        border-top-left-radius:.2rem;border-top-right-radius: .2rem;
    }
    .userImg {position: absolute;top:-.68rem;left:50%;margin-left: -.66rem;width: 1.32rem;height:1.32rem;border-radius: 50%;border: 2px solid #fff;}
    .userImg img {width: 1.32rem;height:1.32rem;border-radius: 50%;}
    .userName {padding-top: .8rem;font-size: .36rem;color: #3e3e3e;}
    .userText {margin-top: .1rem;font-size: .3rem;color: #9a9a9a;}
    .userText span {color: #4dcba9;}
    .code {width: .7rem;height:.7rem;position: absolute;top:.24rem;right:.24rem;}
    .code img {width:.7rem;height:.7rem;}
    .headerBottom {width: 100%;height:1.2rem;background: #fff; border-bottom-left-radius:.2rem;border-bottom-right-radius: .2rem;}
    .headerBottom div {width: 25%;float:left;text-align: center;}
    .headerBottom div p:first-child {font-size: .32rem;color: #4c4c4c;margin-top: .3rem;}
    .headerBottom div p:last-child {font-size: .26rem;color: #666;}
    .sort {margin-top: 1.4rem;background: #fff;border-radius: .2rem;width: 100%;position: relative;height:1.6rem;text-align: center;}
    .sortLink {width: 25%;float:left;position: relative;}
    .sortLink img {width: .7rem;height:.7rem;padding: .2rem 0;}
    .text {font-size: .28rem;color: #9a9a9a;}
    .sortLink span {width:.38rem;height:.38rem;background: #e60012;color: #fff;font-size: .18rem;position: absolute;top:.1rem;right:.4rem;border-radius: 50%;
        text-align: center;line-height: .38rem;
    }
    .link {width: 100%;border-radius: .2rem;background: #fff;margin-top: .2rem;}
    .tabLink {width: 100%;height:1.14rem;line-height: 1.14rem;position: relative;display: block;border-bottom: 1px solid #f0f0f0;font-size: .32rem;color: #7b7b7b;}
    .tabLink img:first-child {width: .54rem;height:.54rem;vertical-align: middle;line-height: 1.14rem;margin: 0 .24rem 0 .38rem;}
    .tabLink img:last-child {position: absolute;right:.24rem;width: .18rem;height:.3rem;top:50%;margin-top: -.15rem;}
</style>
