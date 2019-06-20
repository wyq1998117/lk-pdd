<template>
  <div class="search">
    <!--搜索导航-->
    <search-nav :isShowSearchPanel="isShowSearchPanel"/>
    <!--联动列表-->
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(goods,index) in searchgoods"
            :key="index"
            :class="{current:index === currentIndex}"
            @click="clickLeftItem(index)"
            ref="menulist"
          >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul ref="shopsParent">
          <li class="shops-li" v-for="(goods,index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone,index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item,index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--搜索-->
    <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel"/>
  </div>
</template>

<script>
  import SearchNav from './children/SearchNav'
  import SearchPanel from './children/SearchPanel'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      name: "Search",
      data(){
        return{
          scrollY:0,//右侧列表滑动的Y轴坐标（实时更新）
          rightLiTops:[],//所有分类的头部位置
          isShow:false,
        }
      },
      components:{
        SearchPanel,
        SearchNav
      },
      mounted(){
        this.$store.dispatch('reqSearchgoods',()=>{
          this._initBeScroll();
        })
      },
      computed:{
        ...mapState(['searchgoods']),
        //
        currentIndex(){
          //1.获取数据
          const {scrollY,rightLiTops} = this;
          //2.利用es6中的findIndex取出索引
          return rightLiTops.findIndex((LiTop,index)=>{
            this._leftScroll(index);

            return scrollY >= LiTop && scrollY < rightLiTops[index + 1];//修改过
          });
        }
      },
      watch:{
        searchgoods(){
          this.$nextTick(()=>{
            //1.1初始化
            this._initBeScroll();
            //1.2求出所有版块头部位置
            this._initRightLiTops();
          })
        }
      },
      methods:{
        _initBeScroll(){
          //1.1左边
          this.leftScroll= new BScroll('.menu-wrapper', {
            scrollY: true,
            click:true
          });
          //1.2右边
          this.rightScroll= new BScroll('.shop-wrapper', {
            probeType:3,
            scrollY: true,
            click:true
          });
          //1.3右侧滚动，左侧加current样式
          this.rightScroll.on('scroll',(pos)=>{
            this.scrollY = Math.abs(pos.y);
          });
        },
        //1.2求出所有版块头部位置
        _initRightLiTops(){
          //1.2.1临时数组
          const tempArr = [];
          //1.2.2定义变量记录高度
          let top = 0;
          tempArr.push(top);
          //1.2.3变量li标签，取出高度
          let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li');
          //把伪数组转为真数组
          Array.prototype.slice.call(allLis).forEach(li=>{
            top += li.clientHeight;
            tempArr.push(top);
          });
          //1.2.4跟新数据
          this.rightLiTops = tempArr;
        },
        //1.3点击切换
        clickLeftItem(index){
          this.scrollY = this.rightLiTops[index];
          this.rightScroll.scrollTo(0,-this.scrollY,200);
        },
        //1.4左侧联动
        _leftScroll(index){
          let menuList = this.$refs.menulist;
          let el = menuList[index];
          this.leftScroll.scrollToElement(el,300,0,-100);
        },
        //1.5设置搜索面板的显示隐藏
        isShowSearchPanel(flag){
          this.isShow = flag;
        }
      },
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.search
  background: #f5f5f5
  width: 100%
  height: 100%
  overflow hidden
  .shop
    display flex
    position absolute
    top: 60px
    bottom: 50px
    width 100%
    overflow hidden
    .menu-wrapper
      background-color: #e0e0e0
      width 80px
      flex 0 0 80px
      .menu-item
        width 100%
        height 60px
        background-color: #fafafa
        display flex
        justify-content center
        align-items center
        font-weight lighter
        color #666666
        position relative
      .current
          color #e02e24
      .current::before
        content:''
        background-color: #e02e24
        width 4px
        height 30px
        position absolute
        left: 0
    .shop-wrapper
      flex 1
      background-color: #fff
      .shops-title
        display flex
        flex-direction row
        padding 0 10px
        height: 44px
        align-items center
        justify-content space-between
        color #999
        a
          color #999
          text-decoration none
          font-weight: lighter
      .shops-items
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          width 33.3%
          height 90px
          justify-content center
          align-items center
          color #666
          font-weight: lighter;
          font-size 14px
          img
            width 60%
            height 60%
            margin-bottom: 5px
      .phone-type
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        border-bottom-1px(#ccc)
        li
          width 33.3%
          display flex
          justify-content center
          align-items center
          margin 5px 0
          img
            width 70%
</style>
