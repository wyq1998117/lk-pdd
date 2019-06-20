<template>
  <a class="recommend-item" >
    <img v-lazy="item.thumb_url" alt="" width="100%" v-if="item.thumb_url" >
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <button class="item-btn" @click="clickCell(item)">加入购物车</button>
    </div>
  </a>
</template>

<script>
    export default {
      name: "ShopList",
      props:{
        item:Object,
        clickCell:{
          type:Function,
          default:()=>{}
        }
      },
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-item:nth-child(2n-1)
    margin-right 1%
  .recommend-item
    width 49.5%
    background: #ffff
    margin-bottom 15px
    padding-bottom 15px
    .item-title
      line-height: 20px
      font-size 13px
      font-weight: lighter
      height 20px
      overflow hidden
      margin  5px 0
      padding 0 5px
    .item-bottom
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-size 12px
        font-weight bolder
      .item-sales
        flex 4
        font-size 10px
        color #666666
      .item-btn
        flex 3
        border: 1px solid orangered
        height: 26px
        font-size 10px
        border-radius 5px
        color red
        background-color transparent
</style>
