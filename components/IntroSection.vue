<template>
    <section class="intro">
        <div class="intro-left">
            <swiper>
                <swiper-item v-for="(item,$index) in intros" :key="item.title" :show="introCurrentIdx == $index">
                    <span class="title">{{item.title}}</span>
                    <p v-html="'<p>'+item.content.replace(/\<br\>/g,'</p><p>')+'</p>'"></p>
                </swiper-item>
            </swiper>
            <div class="btns">
                <a href="#joinus" style="text-decoration: none"><btn>立即报名</btn></a>
                <a href="javascript:alert('迎新咨询 QQ 群 767254566')" style="text-decoration: none"><btn :flat="true">加群咨询</btn></a>
            </div>
            <swiper-arrows 
                :isFirst="introCurrentIdx == 0" 
                :isLast=" introCurrentIdx == (intros.length - 1)"
                @next="introCurrentIdx++" 
                @prev="introCurrentIdx--"
                @last="introCurrentIdx = (intros.length - 1)"
                @first="introCurrentIdx = 0" />
        </div>

        <swiper class="intro-right">

            <swiper-item v-for="(item,$index) in intros" :key="item.title" :show="introCurrentIdx == $index">
                <img :src="item.img" />
            </swiper-item>
        </swiper>

    </section>
</template>
<script>
import Swiper from "~/components/Swiper";
import SwiperItem from "~/components/SwiperItem";
import SwiperArrows from "~/components/SwiperArrows";
import Btn from "~/components/Btn";
import {intros} from "~/data/intro.json";
export default {
  components: {
    Swiper,
    SwiperItem,
    Btn,
    SwiperArrows
  },
  data() {
    return {
      introCurrentIdx: 0,
      intros,
      jiaqun: '加群咨询'
    };
  }
};
</script>
<style lang="sass" scoped>
.swiper 
    height: 16rem
    width: 110%

.intro 
    display: flex
    flex-flow: row nowrap
    height: 30rem
    margin-top: -60px

.intro-right
    height: 100%
    .swiper-item
        height: 100%
        width: 100%
        text-align: right
        img
            margin-top: 80px
            margin-right: -45px
            height: 380px
            width: 100%
            object-fit: cover
            border-radius: 70% 30% 70% 30%
    // .swiper-item::before
    //     content: ''
    //     display: block
    //     position: absolute
    //     margin-top: 100px
    //     margin-left: -140px
    //     z-index: 10
    //     height: 330px
    //     width: 200px
    //     background: #fff
    //     // border: 1px solid #ddd
    //     transform: skew(-20deg)
.intro-left
    z-index: 100
    position: relative
    margin-top: 7rem
    width: 31rem
    .title
        font-size: 1.9rem
        display: block
        margin-bottom: 0.5rem
        width: 125%
        // letter-spacing: 5px
        // letter-spacing: 2px
    p
        font-size: 0.9rem
        color: rgb(125, 125, 125)
        padding-top: 5px
        width: 100%

    .btns
        display: flex
        margin-top: 1rem
        flex-flow: row nowrap
    .arrows
        margin-top: 1rem
@media screen and (max-width: 600px)
    .intro
        flex-flow: column-reverse
        margin-left: 20px
        margin-right: 20px
        margin-top: 0px
    .swiper 
        height: 16rem
        width: auto
    .intro-right .swiper-item img
        height: 100px
        margin-top: 0
        margin-right: 0
    .intro-left
        width: auto
        .title
            width: auto
</style>
