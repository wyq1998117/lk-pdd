import Vue from 'vue';
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SRARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  ADD_GOODS_COUNT,
  REDUCE_GOODS_LIST,
  SELECTED_ALL_GOODS,
  SELECTED_SINGER_GOODS,
  DEL_SINGER_GOODS
}from './mutation-types'

export default {
  [HOME_CASUAL](state, {home_casual}) {
    state.home_casual = home_casual;
  },
  [HOME_NAV](state, {homenav}) {
    state.homenav = homenav;
  },
  [HOME_SHOP_LIST](state, {homeshoplist}) {
    state.homeshoplist = homeshoplist;
  },

  [RECOMMEND_SHOP_LIST](state, {recommendshoplist}) {
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist);
  },

  [SRARCH_GOODS](state, {searchgoods}) {
    state.searchgoods = searchgoods;
  },

  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {
    state.userInfo = {};
  },

  [CART_GOODS_LIST](state, {cartgoodslist}) {
    state.cartGoods = cartgoodslist;
  },

  [ADD_GOODS_COUNT](state, {goods}) {
    goods.buy_count++;
  },
  [REDUCE_GOODS_LIST](state, {goods}) {
    if(goods.buy_count){
      goods.buy_count--;
      if(goods.buy_count === 0){
        const index = state.cartGoods.indexOf(goods);
        state.cartGoods.splice(index,1);
      }
    }
  },
  [SELECTED_ALL_GOODS](state, {flag}) {
    state.cartGoods.forEach((goods,index)=>{
      if(goods.checked){//该属性存在
        goods.checked = !flag;
      }else{
        Vue.set(goods,'checked',!flag);
      }
    });
  },
  [SELECTED_SINGER_GOODS](state, {goods}) {
    //1.1判断是否有选中的属性
    if(goods.checked){
      goods.checked = !goods.checked;
    }else{
      Vue.set(goods,'checked',true);
    }
  },
  [DEL_SINGER_GOODS](state, {goods}) {
    goods.buy_count = 0;
    const index = state.cartGoods.indexOf(goods);
    state.cartGoods.splice(index,1);
  },

}
