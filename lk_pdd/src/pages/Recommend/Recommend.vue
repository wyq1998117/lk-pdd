<template>
  <div  class="recommend-container">
    <ul class="recommend"  v-if="userInfo.id && recommendshoplist.length > 0">
      <shop-list
        tag="li"
        v-for="(item,index) in recommendshoplist"
        :item=item
        :key="index"
        :clickCell="dealWithBtnClick"
      />
    </ul>
    <select-login  v-else/>
  </div>
</template>

<script>
  import SelectLogin from '../Login/SelectLogin'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import ShopList from '../../components/ShopList/ShopList'
  import {Toast,Indicator} from 'mint-ui'
  import {addGoodsToCart} from '../../api/index'
  import Scroll from '../../components/mescroll/Scroll'


    export default {
      inject:['reload'],
      name: "Recommend",
      data(){
        return{
          page:1,
          count:20
        }
      },

     created(){
        //显示加载
       this.reload();
        Indicator.open('正在加载数据...');
        this.$store.dispatch('reqRecommendshoplist',{page:this.page,count:this.count,callback:()=>{
            Indicator.close();
          }});

      },
      computed:{
        ...mapState(['recommendshoplist','userInfo'])
      },
      watch: {
        recommendshoplist() {
          this.$nextTick(() => {
            // 让当前的页码+1
            this.page += 1;
            // 初始化
            this._initBScroll();
          })
        }
      },
      components:{
        ShopList,
        SelectLogin
      },
      methods:{
        _initBScroll() {
          // 1.1 初始化
          this.listScroll = new BScroll('.recommend-container', {
            scrollY: true,
            probeType: 3
          });

          // 1.2 监听列表的滚动
          this.listScroll.on('touchEnd', (pos) => {
            // 1.2.1 监听下拉
            /* console.log(pos.y);
             console.log(this.listScroll.maxScrollY);*/
            if (pos.y >= 50) {
              console.log('下拉刷新');
            }
            // 1.2.2 监听上拉
            if (this.listScroll.maxScrollY > pos.y + 20) {
              Indicator.open('Loading...');
              this.$store.dispatch('reqRecommendshoplist', {page: this.page, count: this.count, callback: ()=>{
                  Indicator.close();
                }});
            }
          });

          // 1.3 列表滚动结束
          this.listScroll.on('scrollEnd', () => {
            this.listScroll.refresh();
          });
        },
        //监听商品点击
        async dealWithBtnClick(goods){
          //发送请求
          // user_id,goods_id,goods_name,thumb_url,price
          let result = await addGoodsToCart(this.userInfo.id,goods.goods_id,goods.goods_name,goods.thumb_url,goods.price);
          console.log(result);
          Toast({
            message:"添加成功",
            position:'bottom',
            duration:2000
          });
          this.reload();
        },
      },
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background: #f5f5f5
    width 100%
    height 100%
    overflow hidden
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background: #f5f5f5
      padding-bottom 50px

</style>
