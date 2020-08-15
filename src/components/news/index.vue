<template>
    <div class="container">
        <div class="main">
            <router-link class="list" to="/detail">
                <div class="listLeft"><img src="@/assets/index/bg01.png" alt=""></div>
                <div class="listRight">
                    <p>境外旅游你买对保险了吗？专家：免责条款不能忽略</p>
                    <span>2020-07-30</span>
                </div>
            </router-link>
            <router-link class="list" to="/">
                <div class="listLeft"><img src="@/assets/index/bg01.png" alt=""></div>
                <div class="listRight">
                    <p>境外旅游你买对保险了吗？专家：免责条款不能忽略</p>
                    <span>2020-07-30</span>
                </div>
            </router-link>
            <router-link class="list" to="/">
                <div class="listLeft"><img src="@/assets/index/bg01.png" alt=""></div>
                <div class="listRight">
                    <p>境外旅游你买对保险了吗？专家：免责条款不能忽略</p>
                    <span>2020-07-30</span>
                </div>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {position: relative;width: 100%;}
    .list {padding: .2rem .24rem;border-bottom: 1px solid #f5f6f8;display: block;height:1.4rem;position: relative;}
    .listLeft {float:left;width: 2.1rem;height:1.4rem;}
    .listLeft img {width: 2.1rem;height:1.4rem;}
    .listRight {margin-left: 2.3rem;position: relative;height:1.4rem;}
    .listRight p {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: .26rem;color: #404040;
        line-height: .4rem;
    }
    .listRight span {position: absolute;left:0;bottom:0;font-size: .24rem;color: #757575;}
</style>
