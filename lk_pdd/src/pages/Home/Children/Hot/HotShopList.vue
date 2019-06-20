<template>
    <div class="shop-container" v-if="homeshoplist.length > 0">
      <ul class="shop-list">
        <li class="shop-list-item" v-for="(shop,index) in homeshoplist" :key="index">
          <img v-lazy="shop.image_url" alt="" width="100%">
          <h4 class="list-item-title">{{shop.goods_name}}</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥{{shop.normal_price/100}}</span>
            <span class="item-counter">{{shop.sales_tip}}</span>
            <span class="item-user">
              <img :src="user.avatar" alt="" v-for="(user,index1) in shop.bubble">
            </span>
            <span class="item-buy">
              <button>去拼单</button>
            </span>
          </div>
        </li>
        <li class="shop-list-item">
          <img src="./../../imgs/shop_list/shop_item.png" alt="" width="100%">
          <h4>【亏本冲量】正品新飞 智能预约家用 多功能电饭煲 3L4L5L 电饭锅</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥26.9</span>
            <span class="item-counter">已拼5345件</span>
            <span class="item-user">
              <img src="./../../imgs/shop_list/user1.jpg" alt="">
              <img src="./../../imgs/shop_list/user2.jpg" alt="">
            </span>
            <span class="item-buy">
              <button>去拼单</button>
            </span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "HotShopList",
      computed:{
        ...mapState(['homeshoplist']),
      },
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container
  margin-bottom: 50px
  background-color: #f5f5f5
  .shop-list
    .shop-list-item
      margin-bottom 10px
      background-color: #fff
      display flex
      flex-direction column
      .list-item-title
        line-height: 22px
        width 94%
        margin-left 3%
        height 44px
        overflow: hidden
      .list-item-bottom
        margin:10px 0
        display flex
        flex-direction row
        justify-content space-around
        align-items center
        .item-price
          font-size: 18px
          font-weight:bolder
          text-align center
          color red
          flex 1
        .item-counter
          flex 2
          font-size: 12px
          color #cccc
        .item-user
          display flex
          justify-content center
          align-items center
          flex 1
          img
            width: 30px
            border-radius 50%
          img:nth-child(2)
            margin-left -6px
        .item-buy
          flex 2
          button
            width 80%
            height: 34px
            color #ffff
            font-style: 15px
            display flex
            justify-content center
            align-items center
            margin-left 10px
            background-color red
            border-radius 8px
            border none

</style>
