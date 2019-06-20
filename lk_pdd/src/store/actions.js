import {
  getHomecasual,
  getHomenav,
  getHomeshoplist,
  getRecommendshoplist,
  getSearchGoods,
  getUserInfo,
  getLogout,
  getCartsGoods,
} from '../api/index'

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
} from './mutation-types'

export default {
  //1.获取首页轮播图
  async reqHomecasual({commit}){
    const result =await getHomecasual();//promise对象
    commit(HOME_CASUAL,{home_casual:result.message})
  },
  //2.获取首页导航
  async reqHomenav({commit}){
    const result =await getHomenav();//promise对象
    commit(HOME_NAV,{homenav:result.message.data})
  },
  //3.获取首页商品列表
  async reqHomeshoplist({commit}){
    const result =await getHomeshoplist();//promise对象
    commit(HOME_SHOP_LIST,{homeshoplist:result.message.goods_list})
  },
  //4.获取推荐
  async reqRecommendshoplist({commit},params){
    const result =await getRecommendshoplist(params);//promise对象
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist:result.message});
    params.callback && params.callback();
  },
  //5.获取搜索的列表数据
  async reqSearchgoods({commit},callback){
    const result =await getSearchGoods();//promise对象
    commit(SRARCH_GOODS,{searchgoods:result.message.data});
    callback && callback();
  },
  //6.同步用户信息
  syncUserInfo({commit},userInfo){
    commit(USER_INFO,{userInfo});
  },
  //7.异步获取用户信息
  async getUserInfo({commit},userInfo){
    const result =await getUserInfo();//promise对象
    if(result.success_code === 200){
      commit(USER_INFO,{userInfo:result.message});
    }
  },
  //8.退出登录
  async getLogOut({commit},userInfo){
    const result =await getLogout();//promise对象
    if(result.success_code === 200){
      commit(RESET_USER_INFO);
    }
  },
  //9.请求购物车数据
  async reqCartsGoods({commit},callback){
    const result =await getCartsGoods();//promise对象
    if(result.success_code === 200){
      commit(CART_GOODS_LIST,{cartgoodslist:result.message});
    }
  },
  //10.单个商品的增加和减少
  updateGoodsCount({commit},{goods,isAdd}){
    if(isAdd){//增加
      commit(ADD_GOODS_COUNT,{goods});
    }else{
      //减少
      commit(REDUCE_GOODS_LIST,{goods});
    }
  },
  //11.是否选中所有商品
  selectedAll({commit},{flag}){
    commit(SELECTED_ALL_GOODS,{flag});
  },
  //12.单个商品选中和取消
  singerGoodsSelected({commit},{goods}){
    commit(SELECTED_SINGER_GOODS,{goods});
  },
  //13.单个商品删除
  delGoodsSinger({commit},{goods}){
    commit(DEL_SINGER_GOODS,{goods});
  },
}
