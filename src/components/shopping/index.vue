<template>
    <div class="container">
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
        <router-link class="sort" to="/foodDetail"><img src="@/assets/index/food.png" alt=""><div>美食</div></router-link>
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
    .container {padding: .4rem .5rem; }
    .sort {width: 6.5rem;height:2.5rem;border-radius: .2rem;overflow: hidden;margin-bottom: .2rem;position: relative;display: block;}
    .sort img {width: 100%;height:100%;}
    .sort div {position: absolute;width: 1.2rem;height:.5rem;border-radius: .4rem;left:50%;margin-left: -.6rem;top:50%;margin-top: -.25rem;
        background: #4dcba9;color: #fff;font-size: .24rem;text-align: center;line-height: .5rem;
    }
</style>
