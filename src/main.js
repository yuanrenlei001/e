// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import preview from 'vue-photo-preview'
Vue.use(preview);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// var fontSizeAuto = function(oriWidth){
//     return function(){
//         var viewportWidth = document.documentElement.clientWidth;
//         if(viewportWidth > oriWidth){ viewportWidth = oriWidth; }
//         if(viewportWidth < 320){ viewportWidth = 320; }
//         document.documentElement.style.fontSize = viewportWidth/(oriWidth/100) +'px';
//     }
// }
// fontSizeAuto(750)();
// window.onresize = fontSizeAuto(750);