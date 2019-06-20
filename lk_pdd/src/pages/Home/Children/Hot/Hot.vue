<template>
  <div class="hot">
    <!--1.轮播图-->
    <div class="swiper-container" v-if="home_casual.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in home_casual" :key="index">
          <img :src="item.imgurl" alt="" width="100%">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--2.中间件-->
    <hot-nav/>
    <!--3.广告位-->
    <div class="hot-ad">
      <img src="./../../imgs/home_ad/home_ad.gif" alt="" width="100%">
    </div>
    <!--4.商品列表-->
    <hot-shop-list/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import HotNav from './../Hot/HotNav'
  import HotShopList from './../Hot/HotShopList'
  import 'swiper/dist/css/swiper.min.css'
  import {
    mapState
  } from 'vuex'
  export default {
    name: "Hot",
    components:{
      HotNav,
      HotShopList
    },
    computed:{
      ...mapState(['home_casual']),
    },
    mounted(){
      //1.获取轮播数据
      this.$store.dispatch('reqHomecasual');
      //2.请求首页导航的数据
      this.$store.dispatch('reqHomenav');
      //3.请求首页商品列表的数据
      this.$store.dispatch('reqHomeshoplist');

    },
    watch:{
      home_casual(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        });
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width 100%
    height 100%
    background #f5f5f5
    padding-top: 46px
    .hot-ad
      background-color #fff
      margin 8px 0
      padding 5px
</style>
