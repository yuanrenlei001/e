<template>
    <div class="container">
        <div class="banner"><img src="@/assets/index/banner.jpg" alt=""></div>
        <div class="main">
            <div class="nav">
                <router-link class="navSort" to="/news"><img src="@/assets/index/nav01.png" alt=""> <p>张村故事</p></router-link>
                <router-link class="navSort" to="/food"><img src="@/assets/index/nav02.png" alt=""> <p>进村逛逛</p></router-link>
                <router-link class="navSort" to="/"><img src="@/assets/index/nav03.png" alt=""> <p>在线购票</p></router-link>
                <router-link class="navSort" to="/"><img src="@/assets/index/nav04.png" alt=""> <p>VR漫游</p></router-link>
                <router-link class="navSort" to="/"><img src="@/assets/index/nav05.png" alt=""> <p>商城</p></router-link>
            </div>
            <div class="red"><img src="@/assets/index/hongbao.png" alt=""></div>
            <div class="sort">
                <div class="sort01">
                    <div class="sortLeft"><router-link class="sortLink" to="/"><img src="@/assets/index/sort01.png" alt=""></router-link></div>
                    <div class="sortRight">
                        <router-link class="sortLink"  to="/"><img src="@/assets/index/sort02.png" alt=""></router-link>
                        <router-link class="sortLink"  to="/"><img src="@/assets/index/sort03.png" style="position: absolute;bottom:0;" alt=""></router-link>
                    </div>
                </div>
                <div class="sort02"><router-link class="sortLink" to="/"><img src="@/assets/index/sort04.png" alt=""></router-link></div>
            </div>
        </div>
        <div class="news">
            <div class="newsLeft"><img src="@/assets/index/news.png" alt=""></div>
            <div class="newsRight">改善农村居环境，建设美丽宜居乡村</div>
        </div>
        <div class="list">
            <div class="listHot">
                <router-link class="listHotLink" to="/">
                    <div class="listHot01">
                        <img src="@/assets/index/bg01.png" alt="" class="bg">
                        <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                    </div>
                    <div class="listHot02">
                        <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                        <div>
                            <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                            <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                        </div>
                    </div>
                </router-link>
                <router-link class="listHotLink" to="/">
                    <div class="listHot01" style="height:3.7rem;">
                        <img src="@/assets/index/bg02.png" alt="" class="bg">
                        <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                    </div>
                    <div class="listHot02">
                        <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                        <div>
                            <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                            <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                        </div>
                    </div>
                </router-link>
                <router-link class="listHotLink" to="/">
                    <div class="listHot01" style="height:3.7rem;">
                        <img src="@/assets/index/bg03.png" alt="" class="bg">
                        <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                    </div>
                    <div class="listHot02">
                        <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                        <div>
                            <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                            <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                        </div>
                    </div>
                </router-link>
                <router-link class="listHotLink" to="/">
                    <div class="listHot01">
                        <img src="@/assets/index/bg04.png" alt="" class="bg">
                        <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                    </div>
                    <div class="listHot02">
                        <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                        <div>
                            <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                            <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="list" style="padding: 0 .24rem 1.2rem .24rem;">
            <router-link class="listHotLink" to="/" style="width: 100%;">
                <div class="listHot01" >
                    <img src="@/assets/index/bg01.png" alt="" class="bg">
                    <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                </div>
                <div class="listHot02">
                    <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                    <div>
                        <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                        <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                    </div>
                </div>
            </router-link>
            <router-link class="listHotLink" to="/" style="width: 100%;">
                <div class="listHot01" >
                    <img src="@/assets/index/bg01.png" alt="" class="bg">
                    <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                </div>
                <div class="listHot02">
                    <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                    <div>
                        <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                        <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                    </div>
                </div>
            </router-link>
            <router-link class="listHotLink" to="/" style="width: 100%;">
                <div class="listHot01" >
                    <img src="@/assets/index/bg01.png" alt="" class="bg">
                    <div class="address"><img src="@/assets/index/address.png" class="icon_address" alt="">布里斯班</div>
                </div>
                <div class="listHot02">
                    <div class="listHot02Text">私藏！去澳洲最纯净沙 滩，追海豚咯~</div>
                    <div>
                        <div class="users"><img src="@/assets/index/bg01.png" alt=""> 王豆豆</div>
                        <div class="xin"><img src="@/assets/index/xin.png" alt=""> 132</div>
                    </div>
                </div>
            </router-link>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .banner {width: 7.5rem;height:3.3rem;}
    .banner img {width: 100%;height:100%;}
    .main {position: relative;padding: 0 .24rem .3rem .24rem;}
    .nav {position: absolute;top:-.8rem;background: #fff;width: 94%;border-radius: .2rem;height:1.92rem;}
    .navSort {width: 20%;float:left;color: #4c4c4c;font-size: .28rem;text-align: center;}
    .navSort img {width: .8rem;height:.8rem;margin-top: .36rem;}
    .red {padding-top: 1.2rem;}
    .red img {width: 6.9rem;height:1.66rem;}
    .sort {position: relative;width: 100%;}
    .sort img {width: 100%;}
    .sort01 {height:2.5rem;}
    .sort01 .sortLeft {width:50%;height:2.5rem;position: relative;float:left;}
    .sort01 .sortRight {width:49%;height:2.5rem;position: relative;float:left;margin-left: 1%;}
    .sort02 {margin-top: .1rem;}
    .news {padding: 0 .24rem;background: #fff;border-top: .1rem solid #f6f5f5;border-bottom: .1rem solid #f6f5f5;
        height:.84rem;line-height: .84rem;
    }
    .newsLeft {width: 28%;float:left;}
    .newsLeft img {width: 1.47rem;height:.37rem;vertical-align: middle;}
    .newsRight {width: 72%;float:left;white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        font-size: .32rem;color: #666;
    }
    .list {padding: .32rem .24rem 0 .24rem; position: relative;overflow: hidden;}
    .listHot {width: 100%;position: relative;overflow: hidden;

        -moz-column-count:2; /* Firefox */
        -webkit-column-count:2; /* Safari 和 Chrome */
        column-count:2;
        -moz-column-gap: .22rem;
        -webkit-column-gap: .22rem;
        column-gap: .22rem;
        display: inline-block;
    }
    .listHotLink {width: 3.4rem;float:left;background: #fff;border-radius: .2rem;
        box-shadow: 0 0 .1rem rgba(0,0,0,.2);margin-bottom: .22rem;
    }
    .listHot01 {position: relative;height:2.56rem;}
    .bg {width: 100%;height:100%;}
    .address {position: absolute;bottom:.22rem;left:.22rem;background: rgba(0,0,0,.2);text-align: center;font-size: .24rem;
            padding: 0 .1rem;color: #fff;
        border-radius: .4rem;}
    .address img {width: .16rem;height:.2rem;margin-right: .1rem;}
    .listHot02 {padding: .24rem;height:1.22rem;position: relative;}
    .listHot02Text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: .28rem;color: #333;
    }
    .users {position: absolute;left:.24rem;bottom:.16rem;font-size: .24rem;color: #989897;line-height: .38rem;}
    .users img {width: .38rem;height:.38rem;border-radius: 50%;vertical-align: middle;}
    .xin {position: absolute;right:.24rem;bottom:.24rem;font-size: .26rem;color: #656565;line-height: .27rem;}
    .xin img {width: .27rem;height:.27rem;vertical-align: bottom;}
</style>
