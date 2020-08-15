<template>
    <div class="container">
        <div class="null">
            <img src="@/assets/null.png" class="nullImg" alt="">
            <router-link class="add" to="/add" >新增收货地址</router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                isNull:true
            }
        },
        components: {
        },
        mounted(){
        },
        // beforeCreate(){
        //     window.document.body.style.backgroundColor = '#f5f6f8'
        // },
        // beforeDestroy(){
        //     window.document.body.style.backgroundColor = ''
        // },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nullImg {width: 100%;height:100%;margin: 1rem  0;}
    .add {width: 7rem;position: relative;margin: auto;height:.88rem;line-height: .88rem;border-radius: .2rem;color: #fff;font-size: .32rem;
        background: #4dcba9;text-align: center;display: block;
    }
</style>
