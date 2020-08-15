<template>
    <div class="container" style="padding-bottom: 2rem;">
        <div class="shareMain">
            <div class="shareList">
                <div style="padding: 0 .24rem;">
                    <div class="shareTop">
                        <div class="shareTopLift"><img src="@/assets/index/bg01.png" alt=""></div>
                        <div class="shareTopRight">
                            <p>张三</p>
                            <p>2019-07-08 14:30:31</p>
                        </div>
                    </div>
                    <div class="shareText" v-html="item.content"></div>
                    <div class="shareShow" @click="open($event)" v-if="item.content.length>80" style="display: block;">展开</div>
                    <div style="position: relative;width:100%;overflow: hidden;">
                        <div class="shareImg appImg my-gallery clearfix" data-pswp-uid="12312" style="width:105%;overflow: hidden;">
                            <img src="@/assets/index/bg01.png" preview="3" preview-text="描述文字">
                            <img src="@/assets/index/bg01.png" preview="3" preview-text="描述文字">
                            <img src="@/assets/index/bg01.png" preview="3" preview-text="描述文字">
                            <img src="@/assets/index/bg01.png" preview="3" preview-text="描述文字">
                            <img src="@/assets/index/bg01.png" preview="3" preview-text="描述文字">
                            <img src="@/assets/index/bg01.png" preview="3" preview-text="描述文字">
                        </div>
                    </div>
                </div>
            </div>
            <div class="shareBottom">
                <div class="article">
                    <div class="note" style="text-align: left;position: relative;">
                        <span class="isgood good" style="margin-right: 0;">昨天 22.23</span>
                        <!--<span v-else class="isgood good_" style="margin-right: 0;" @click="isGood(item.id,$event)" style="line-height: 9vw;">@{{ item.likes }}</span>-->
                        <span  style="position: absolute;left:50%;">点评</span>
                    </div>
                </div>
            </div>
            <div id="annexMerge">
                <div class="annexMergeTop">
                    <div @click="Onclick($event,1)" class="annexActive" id="iconPl">评论（123）</div>
                    <div @click="Onclick($event,2)"  id="iconZan" >已赞（123）</div>
                    <div @click="Onclick($event,3)"  id="iconSee">已读（123）</div>
                </div>
                <div class="comment bottomDiv" style="padding-bottom: 0;">
                    <div class="lists" style="margin-top:0;">
                        <div  class="list clear zbhd">
                            <div class="plTop">
                                <div class="fl"><img src="@/assets/index/bg01.png" alt="用户" class="user"></div>
                                <div class="midRight"><div class="name limit">张三丰</div><div class="time">2019-05-18</div></div>
                            </div>
                            <div class="mid"><div class="PLcontent" >为严格规范发展程序，落实党员发展对于培训的要求，进一步加强对入党积极分子和党员发展对象的理论武装为严格规范发展程序，落实党员发展对于培训的要求，进一步加强对入党积极分子和党员发展对象的理论武装为严格规范发展程序，落实党员发展对于培训的要求，进一步加强对入党积极分子和党员发展对象的理论武装为严格规范发展程序，落实党员发展对于培训的要求，进一步加强对入党积极分子和党员发展对象的理论武装</div></div>
                        </div>
                    </div>
                </div>
                <!--点赞-->
                <div class="zan bottomDiv" style="display: none;">
                    <div  class="list clear zbhd" >
                        <div class="plTop">
                            <div class="fl"><img src="@/assets/index/bg01.png" alt="用户" class="user"></div>
                            <div class="midRight"><div class="name limit">123123</div><div class="time">12312</div></div>
                        </div>
                    </div>
                </div>
                <!--已读人员-->
                <div class="ready bottomDiv" style="display: none;">
                    <div  class="list clear zbhd" >
                        <div class="plTop">
                            <div class="fl"><img src="@/assets/index/bg01.png" alt="用户" class="user"></div>
                            <div class="midRight"><div class="name limit">123123</div><div class="time">12312</div></div>
                        </div>
                    </div>
                </div>
                <div class="tip"></div>
                <div class="loading hidden">
                    <div class="typing_loader"></div>
                </div>
            </div>

        </div>
        <minShopBar v-if="showMinShopTab" />
    </div>
</template>

<script>
    import 'vue-photo-preview/dist/skin.css'
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                showMinShopTab: true,
                img:'',
                item:{content:'为严格规范发展程序，落实党员发展对于培训的要求，进一步加强对入党积极分子和党员发展对象的理论武装和党性教育，近日，安庆市宜秀区白泽湖乡为严格规范发展程序，落实党员发展对于培训的要求，进一步加强对入党积极分子和党员发展对象的理论武装和党性教育，近日，安庆市宜秀区白泽湖乡'}
            };
        },
        components: {
            minShopBar
        },
        methods:{
            // 展开/收起评论
            open:function(e){
                let root = e.currentTarget.previousElementSibling;
                if(e.target.innerHTML == '展开'){
                    e.target.innerHTML = '收起'
                    root.style.cssText="-webkit-line-clamp: inherit;";
                }else{
                    e.target.innerHTML = '展开'
                    root.style.cssText="-webkit-line-clamp: 3;";
                }
            },
            Onclick:function(e,type){
                this.type = type;
            },
            // 评论
            send:function(id){
                var _this = this;
                swal({
                    title: '',
                    text: '请输入您的评论！',
                    type: 'input',
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "确定",
                    animation: "slider-form-top"

                }, function(inputValue) {
                    if (inputValue === false) return false;

                    if (inputValue.length < 1) {
                        swal.showInputError("评论字数不能少于1个字！");
                        return false
                    }

                    if (inputValue.length > 300) {
                        swal.showInputError("您输入的字超过了300！");
                        return false
                    }
                    let params = {
                        posts_id:id,
                        content:inputValue
                    }
                    swal({
                        title: ' ',
                        text: '评论提交中...',
                        showConfirmButton: false
                    });
                    axios.post('/api/share/addComment', Qs.stringify(params), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(res => {
                        console.log(res)
                        $('.shareList').each(function(){
                            if($(this).attr('id') == id){
                                console.log(_this.users)
                                if ($('#' + id).find('.PlList p').length >= 7) {
                                    $('#' + id).find('.PlList').prepend('<p>' +_this.users.name+'：'+inputValue + '</p>');
                                    $('#' + id).find('.PlList p').eq(-1).remove();
                                    $('#' + id).find('.plmore').css('display', 'block');
                                } else {
                                    $('#' + id).find('.annPl').show();
                                    $('#' + id).find('.PlList').prepend('<p>' +_this.users.name+'：'+inputValue +  '</p>');
                                }
                                $('#' + id).find('#iconPl span').text(parseInt($('#' + id).find('#iconPl span').text())+1)
                            }
                        })
                        // $('.PlList').append('<p>'+inputValue+'</p>')
                        swal({
                            title: ' ',
                            text: '评论成功',
                            type: 'success',
                            confirmButtonText: '确定',
                            timer: 3000
                        });
                    }).catch(err => {
                        this.$message.warning("网络出错");
                        console.error(err);
                    })
                })
            },
        },
        created(){
        },
        mounted(){
            //异步插入的图片
            //     setTimeout(() => {
            //         this.img1.push('1.jpg')
            //     this.$previewRefresh()
            // }, 2000);

            //图片查看器打开后，打印本次查看器的实例（事件、方法、属性的示例）
            this.$preview.on('imageLoadComplete',(e,item)=>{
                console.log(this.$preview.self)
            })
        }
    }
</script>

<style scoped>
    .fl {float:left;}
    .lists {margin-top: -4vw;}
    .midRight .name {font-size: .26rem;color: #4c4c4c;padding-top: .3rem;}
    .midRight .time {font-size: .26rem;color: #808080;}
    .container >>> .pswp {z-index: 99999;}
    .shareMain {width:100%;position: relative;height:100%;border-bottom: .2rem solid #f5f6f8;}
    .shareList {width:100%;position: relative;background: #fff;}
    .shareTop {width:100%;padding: .24rem 0;position: relative;}
    .shareTopLift {width:.8rem;height:.8rem;float:left;}
    .shareTopLift img {width:.8rem;height:.8rem;border-radius: 50%;}
    .shareTopRight {margin-left:.98rem;height:.87rem;position: relative; }
    .shareTopRight p:first-child {color: #4c4c4c;font-size: .3rem;}
    .shareTopRight p:first-child span {color: #fff;font-size: .24rem;padding: .05rem .2rem;background:#3fbda7;border-radius: .2rem; }
    .shareTopRight p:last-child {position: absolute;bottom:0;left:0;font-size: .26rem;color: #808080;}
    .shareText {font-size: .26rem;color: #666;text-align: justify;line-height: .48rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    .shareShow {font-size: .28rem;color:#3fbda7;line-height: .6rem;display: none;}
    .shareImg img {width:2.2rem;height:2.2rem;margin: 0 .2rem .2rem 0;}
    #annexMerge {
        position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        padding-bottom: 1rem;
    }
    /*#iconSee:before {background-image: url('../../assets/img/share/see.png');}*/
    /*#iconZan:before {background-image: url('../../assets/img/share/zan.png');}*/
    /*#iconPl:before {background-image: url('../../assets/img/share/pl.png');}*/
    .annexMergeTop {width:100%;height:1rem;line-height: 1rem;font-size: .24rem;color: #4c4c4c;padding: 0 4vw;border-bottom: 1px solid #dbdbdb;}
    .annexMergeTop div {padding: 0 .1rem 0 .4rem;text-align: center;height:1rem;line-height: 1rem;border-bottom: 4px solid transparent;}
    .annexMergeTop div:nth-child(1) {left:4vw;position: absolute;top:0;}
    .annexMergeTop div:nth-child(2) {
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-align: center;*/
        left:37%;position: absolute;top:0;
    }
    #iconZan:before {
        top:inherit;
        left:0;
        margin-top: .3rem;
    }
    .annexMergeTop div:nth-child(3) {right:4vw;position: absolute;top:0;}
    .annexMergeTop .annexActive {color:#3fbda7;border-bottom: 4px solid #3fbda7; }
    .annexMergeTop div:before {
        content: '';
        width: .3rem;
        height: .3rem;
        position: absolute;
        top: 50%;
        margin-top: -.15rem;
        left: 0;
        background-repeat: no-repeat;
        background-size: .3rem .3rem;
    }
    /*评论*/
    .ready .list ,.zan .list {
        width: 100%;
        padding-left: 3.4vw;
        padding-right: 3.4vw;
        min-height: 75px;
        border-bottom: 1px solid #f1f1f1;
    }
    .ready .list .fl img {
        width: .74rem;
        height: .74rem;
        margin-top: 3.4vw;
        margin-right: 3vw;
        overflow: hidden;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    .ready .list .mid {
        width: 100%;
        position: relative;
        text-align: justify;
        margin-top: .2rem;
    }
    .ready .list .mid .name {
        width: 100%;
        /*height: 14.9vw;*/
        /*line-height: 14.9vw;*/
        color: #333;
        font-size: .28rem;
        margin-top: .25rem;
    }
    .midRight {
        height:1rem;
    }
    .ready .list .mid .PLcontent {
        width: 100%;
        word-break: break-all;
        font-size: .26rem;
        color: #666;
        margin-bottom:2vw;
    }
    .ready .list .mid .time {
        font-size: .24rem;
        line-height: 5.3vw;
        color: #999999;
        padding-bottom: 2vw;
    }
    .ready .list .fr {
        margin-top: 5vw;
        color: #999999;
        line-height: 4vw;
        font-size: .24rem;
    }












    .zan .list .fl img {
        width: .74rem;
        height: .74rem;
        margin-top: 3.4vw;
        margin-right: 3vw;
        overflow: hidden;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    .zan .list .mid {
        width: 100%;
        position: relative;
        text-align: justify;
        margin-top: .2rem;
    }
    .zan .list .mid .name {
        width: 100%;
        /*height: 14.9vw;*/
        /*line-height: 14.9vw;*/
        color: #333;
        font-size: .28rem;
        margin-top: .25rem;
    }
    .midRight {
        height:1rem;
    }
    .zan .list .mid .PLcontent {
        width: 100%;
        word-break: break-all;
        font-size: .26rem;
        color: #666;
        margin-bottom:2vw;
    }
    .zan .list .mid .time {
        font-size: .24rem;
        line-height: 5.3vw;
        color: #999999;
        padding-bottom: 2vw;
    }
    .zan .list .fr {
        margin-top: 5vw;
        color: #999999;
        line-height: 4vw;
        font-size: .24rem;
    }
    .show {display: block;}
    .hide {display: none;}

    /*点赞 收藏*/
    .article {padding: 0 .24rem;}
    .article .note {
        text-align: right;
        color: #999999;
        font-size: .24rem;
    }
    .article .note span {
        height: 8vw;
        display: inline-block;
        /*margin-right: 3vw;*/
        line-height: 8vw;
        font-size: .24rem;
        vertical-align: middle;
    }
    .article .note span:first-child {
        max-width:40vw;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        text-align: left;
    }
    .article .note_ span{
        margin-right: 0;
    }
    .article .note .good,.article  .note .isgood ,.all .note .good_{
        margin-right: 0;
    }
    .article .note .read {
        margin-right: 3.2vw;
        /*background: url('../../assets/img/share/scan_.png') 0 center no-repeat;*/
        background-size: .24rem .24rem;
        padding-left: .3rem;
    }
    .article .note .good {
        /*background: url('../../assets/img/share/good.png') 0 center no-repeat;*/
        /*background-size: .24rem .24rem;*/
        /*padding-left: .3rem;*/
    }
    .article .note .good_ {
        /*background: url('../../assets/img/share/good_.png') 0 center no-repeat;*/
        background-size: .24rem .24rem;
        padding-left: .3rem;
        animation: shake 300ms ease;
        -webkit-animation: shake 300ms ease;
    }
    /*评论*/
    .comment {
        padding-bottom: 13vw;
    }
    .comment .sum {
        height: 8vw;
        padding-left: 3.4vw;
        background: #fcfcfc;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        font-size: .24rem;
        line-height: 8vw;
    }
    .comment .lists .list {
        padding-left: 3.4vw;
        padding-right: 3.4vw;
        min-height: 100px;
        border-bottom: 1px solid #f1f1f1;
    }
    .comment .lists .list .fl img {
        width: .74rem;
        height: .74rem;
        margin-top: 3.4vw;
        margin-right: 3vw;
        overflow: hidden;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    .comment .lists .list .mid {
        width: 100%;
        position: relative;
        text-align: justify;
        margin-top: .2rem;
    }
    .comment .lists .list .mid .name {
        width: 100%;
        /*height: 14.9vw;*/
        /*line-height: 14.9vw;*/
        color: #333;
        font-size: .28rem;
        margin-top: .25rem;
    }
    .midRight {
        height:1rem;
    }
    .comment .lists .list .mid .PLcontent {
        width: 100%;
        word-break: break-all;
        font-size: .26rem;
        color: #666;
        margin-bottom:2vw;
    }
    .comment .lists .list .mid .time {
        font-size: .24rem;
        line-height: 5.3vw;
        color: #999999;
        padding-bottom: 2vw;
    }
    .comment .lists .list .fr {
        margin-top: 5vw;
        color: #999999;
        line-height: 4vw;
        font-size: .24rem;
    }
    .comment .lists .list .good {
        /*background: url('../../assets/img/share/good.png') 0 center no-repeat;*/
    }
    .comment .lists .list .good_ {
        animation: shake 300ms ease;
        -webkit-animation: shake 300ms ease;
        /*background: url('../../assets/img/share/good_.png') 0 center no-repeat;*/
    }
    .comment .lists .list .isgood {
        background-size: .24rem .24rem;
        padding-left: .3rem;
    }
    .comment .tip {
        height: 10.6vw;
        text-align: center;
        line-height: 10.6vw;
        color: #c1c1c1;
        font-size: .24rem;
    }
    .sweet-alert.show-input textarea {
        font-size: .28rem;
        padding: 1.6vw;
        line-height: .36rem;
        overflow: hidden;
    }
    .comment .lists .list .isgood {
        background-position: center center;
        padding-left: 8.6vw;
        line-height: 10.6vw;
        margin-top: 0;
        position: absolute;
        right:4vw;
    }
</style>