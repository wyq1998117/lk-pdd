<template>
    <div class="search-panel">
      <div class="search-nav">
        <div class="search-input">
          <img src="../images/search.png" alt="" width="20">
          <input ref="mySearch" type="search" placeholder="高仿拼多多">
        </div>
        <button @click.prevent="isShowSearchPanel(false)">取消</button>
      </div>
      <div class="search-content">
        <div class="title">
          <img src="../images/hot.png" alt="" width="25">
          <span>热门搜索</span>
        </div>
        <ul class="search-list">
          <li>抽纸批发</li>
          <li>石榴水果</li>
          <li>冰箱收纳盒</li>
          <li>富豪手纸</li>
          <li>毛巾衣服</li>
          <li>小白鞋增高透气</li>
          <li>连衣裙夏</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "SearchPanel",
      props:{
        isShowSearchPanel:Function
      },
      mounted(){
        this.$refs.mySearch.focus();
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
.search-panel
  width 100%
  height 100%
  background-color: #fff
  position fixed
  left 0
  top 0
  z-index 1000
  .search-nav
    width 100%
    height 60px
    border-bottom-1px(#ddd)
    padding 0 20px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .search-input
      display flex
      flex-direction row
      align-items center
      background-color: #ededed
      width 85%
      height 38px
      border-radius 10px
      padding 0 10px
      input
        width 90%
        height 90%
        padding-left 8px
        font-size 16px
        background transparent
        outline none
    button
      background transparent
      font-size 16px
      color #aaa
  .search-content
    padding 30px 15px
    .title
      display flex
      flex-direction row
      align-items center
      color #aaa
      margin-bottom 10px
    .search-list
      display flex
      flex-direction row
      flex-wrap wrap
      li
        background #ededed
        color #aaa
        margin 5px 10px
        padding 5px
        border-radius 8px
        font-weight lighter
        font-size 12px
</style>
