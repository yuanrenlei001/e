<template>
    <div class="container">
        <div class="tabs">
            <div class="active">待付款</div>
            <div>待消费</div>
            <div>退货/售后</div>
        </div>
        <div class="list">
            <div class="order">
                <div class="orderTop">
                    <div class="orderTop01"><img src="@/assets/user/dianpu.png" alt=""></div>
                    <div class="orderTop02">中国国际旅行社 ></div>
                    <span>待付款</span>
                </div>
                <div class="orderMain">
                    <div class="orderMainLeft"><img src="@/assets/user/dan.png" alt=""></div>
                    <div class="orderMainRight">
                        <div class="orderMainRight01">清凉一下.乌金山狂欢谷通票精品一日游路线乌金山狂欢谷通票精品一日游路线</div>
                        <div class="orderMainRight02">门票种类：成人票</div>
                        <div class="orderMainRight03">出行日期：2020-07-30</div>
                    </div>
                    <div class="price">￥368.00</div>
                    <div class="num">×1</div>
                </div>
                <div class="orderBottom">
                    <div class="orderBottomLeft">合计：<span>￥368.00</span></div>
                    <div class="orderBottomRight">
                        <div class="orderBtns">付款</div>
                        <div class="orderBtn">取消订单</div>
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="orderTop">
                    <div class="orderTop01"><img src="@/assets/user/dianpu.png" alt=""></div>
                    <div class="orderTop02">中国国际旅行社 ></div>
                    <span>待付款</span>
                </div>
                <div class="orderMain">
                    <div class="orderMainLeft"><img src="@/assets/user/dan.png" alt=""></div>
                    <div class="orderMainRight">
                        <div class="orderMainRight01">清凉一下.乌金山狂欢谷通票精品一日游路线乌金山狂欢谷通票精品一日游路线</div>
                        <div class="orderMainRight02">门票种类：成人票</div>
                        <div class="orderMainRight03">出行日期：2020-07-30</div>
                    </div>
                    <div class="price">￥368.00</div>
                    <div class="num">×1</div>
                </div>
                <div class="orderBottom">
                    <div class="orderBottomLeft">合计：<span>￥368.00</span></div>
                    <div class="orderBottomRight">
                        <div class="orderBtns">申请退款</div>
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="orderTop">
                    <div class="orderTop01"><img src="@/assets/user/dianpu.png" alt=""></div>
                    <div class="orderTop02">中国国际旅行社 ></div>
                    <span>待付款</span>
                </div>
                <div class="orderMain">
                    <div class="orderMainLeft"><img src="@/assets/user/dan.png" alt=""></div>
                    <div class="orderMainRight">
                        <div class="orderMainRight01">清凉一下.乌金山狂欢谷通票精品一日游路线乌金山狂欢谷通票精品一日游路线</div>
                        <div class="orderMainRight02">门票种类：成人票</div>
                        <div class="orderMainRight03">出行日期：2020-07-30</div>
                    </div>
                    <div class="price">￥368.00</div>
                    <div class="num">×1</div>
                </div>
                <div class="orderBottom">
                    <div class="orderBottomLeft">合计：<span>￥368.00</span></div>
                    <div class="orderBottomRight">
                        <div class="orderBtns">退款成功</div>
                    </div>
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
    /*html, body, #app {background: #f5f6f8;}*/
    .tabs {width: 7.5rem;height:.88rem;background: #fff;position: relative;border-bottom: 1px solid #e6e6e6;margin-bottom: .1rem;}
    .tabs div {width: 33.33%;float:left;height:.88rem;font-size: .32rem;color: #666;text-align: center;line-height: .88rem;position: relative;}
    .tabs div.active {color: #4dcba9;}
    .tabs div.active:before {
        content: '';
        width: 80%;
        border-bottom: 2px solid #4dcba9;
        left:10%;
        bottom:0;
        position: absolute;
    }
    .order {border-top: 1px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;background: #fff;margin-bottom: .2rem;}
    .orderTop {height:.7rem;line-height: .7rem;position: relative;padding: 0 .24rem;}
    .orderTop .orderTop01 {width: .28rem;height:.7rem;float:left;line-height: .7rem;}
    .orderTop img {width: .28rem;height:.25rem;vertical-align: middle;line-height: .7rem;}
    .orderTop .orderTop02 {margin-left: .38rem;font-size: .28rem;color: #4c4c4c;line-height: .7rem;position: relative;}
    .orderTop span {position: absolute;height:.7rem;line-height: .7rem;font-size: .24rem;color: #cd0e16;top:0;right:.24rem;}
    .orderMain {padding: .3rem .24rem;background: #fafafa;height:1.83rem;position: relative;border-bottom: 1px solid #e6e6e6;}
    .orderMainLeft {float:left;padding-top: .1rem;}
    .orderMainLeft img {width: .46rem;height:.46rem;}
    .orderMainRight {margin-left: .6rem;}
    .orderMainRight01 {width: 80%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: .3rem;
        color: #4c4c4c;
    }
    .orderMainRight02 {font-size: .28rem;color: #666;margin-top: .2rem;}
    .orderMainRight03 {font-size: .28rem;color: #666;margin-top: .1rem;}
    .price {position: absolute;color: #ad1e23;font-size: .28rem;top:.3rem;right:.24rem;}
    .num {position: absolute;color: #666;font-size: .26rem;bottom:.3rem;right:.24rem;}
    .orderBottom {padding: 0 .24rem;height:1rem;line-height: 1rem;background: #fff;position: relative;}
    .orderBottomLeft {font-size: .3rem;color: #4c4c4c;float:left;}
    .orderBottomLeft span {color: #ad1e23;font-size: .28rem;}
    .orderBottomRight {width: 80%;text-align: right;margin-left: 19%;}
    .orderBottomRight div {width: 1.6rem;height:.56rem;text-align: center;line-height: .56rem;border-radius: .4rem;float:right;font-size: .24rem;
    position: relative;margin: .28rem .1rem 0 .1rem;
    }
    .orderBtn {border: 1px solid #666;background: #fff;color: #666;}
    .orderBtns {border: 1px solid #4dcba9;background: #4dcba9;color: #fff;}
</style>
