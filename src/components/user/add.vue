<template>
    <div class="container">
        <div class="main">
            <div class="link">
                <div class="tabLink">收货人： <input type="text"> <img class="right" src="@/assets/right.png" alt=""></div>
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
    .link {width: 100%;background: #fff;margin-top: .2rem;}
    .tabLink {height:1.14rem;line-height: 1.14rem;position: relative;display: block;border-bottom: 1px solid #f0f0f0;font-size: .32rem;color: #7b7b7b;padding-left: .24rem;}
    .tabLink .right {position: absolute;right:.24rem;width: .18rem;height:.3rem;top:50%;margin-top: -.15rem;}
    .tabLink .user {position: absolute;right:.7rem;width: .7rem;height:.7rem;top:50%;margin-top: -.35rem;border-radius: 50%;}
    .tabLink .text {position: absolute;right:.7rem;text-align: center;top:0;}
</style>
