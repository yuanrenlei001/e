<template>
    <div class="container">
        <div class="main">
            <div class="coupon wushi">
                <div class="couponLeft">
                    <div class="couponLeft01">¥<span>10</span></div>
                    <div class="couponLeft02">代金券</div>
                </div>
                <div class="couponRight">
                    <div class="couponRight01">满50元时使用</div>
                    <div class="couponRight02">有效期至：2020-09-14</div>
                </div>
            </div>
            <div class="coupon yibai">
                <div class="couponLeft">
                    <div class="couponLeft01">¥<span>10</span></div>
                    <div class="couponLeft02">代金券</div>
                </div>
                <div class="couponRight">
                    <div class="couponRight01">满50元时使用</div>
                    <div class="couponRight02">有效期至：2020-09-14</div>
                </div>
            </div>
            <div class="coupon guoqi">
                <div class="couponLeft">
                    <div class="couponLeft01">¥<span>10</span></div>
                    <div class="couponLeft02">代金券</div>
                </div>
                <div class="couponRight">
                    <div class="couponRight01">满50元时使用</div>
                    <div class="couponRight02">有效期至：2020-09-14</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
            }
        },
        components: {
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
    .main {padding: .3rem;}
    .coupon {width: 100%;height:2.2rem;position: relative;
        background-repeat: no-repeat;
        background-size: 100% 2.2rem;
        overflow: hidden;;
    }
    .coupon.wushi { background-image: url('../../assets/user/dj01.png');}
    .coupon.yibai { background-image: url('../../assets/user/dj02.png');}
    .coupon.guoqi { background-image: url('../../assets/user/dj03.png');}
    .couponLeft {width: 2rem;float:left;height:100%;text-align: center;padding-top: .4rem;}
    .couponLeft01 {font-size: .48rem;}
    .couponLeft02 {width: .82rem;height:.32rem;border: 1px solid #c4c4c4;line-height: .32rem;border-radius: 4px;position: relative;left:50%;margin-left: -.4rem;top:.1rem;}
    .couponLeft01 span {font-size: .75rem;}
    .couponRight {margin-left: 2.3rem;width: 60%;height:100%;overflow: hidden;padding-top: .4rem;font-size: .25rem;color: #282828;}
    .couponRight01 {font-size: .34rem;color: #282828;}
    .couponRight02 {font-size: .26rem;color: #909090;margin-top: .2rem;}
    .coupon.wushi .couponLeft01 {color: #ff9204;}
    .coupon.wushi .couponLeft02 {color: #ff9204;border: 1px solid #ff9204; }
    .coupon.yibai .couponLeft01 {color: #4dcba9;}
    .coupon.yibai .couponLeft02 {color: #4dcba9;border: 1px solid #4dcba9; }
    .coupon.guoqi .couponLeft01 {color: #c4c4c4;}
    .coupon.guoqi .couponLeft02 {color: #c4c4c4;border: 1px solid #c4c4c4; }
    .coupon.guoqi .couponRight01 {color: #c4c4c4; }
    .coupon.guoqi .couponRight02 {color: #c4c4c4; }
</style>
