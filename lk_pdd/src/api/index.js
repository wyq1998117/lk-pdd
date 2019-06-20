import ajax from './ajax'

//1.基础路径
const Base_URL = '/api';
// const Base_URL = 'http://localhost:3000';
//2.1 请求首页的轮播
export const getHomecasual = ()=>ajax(Base_URL + '/api/homecasual');

//2.2 请求首页的导航
export const getHomenav = ()=>ajax(Base_URL + '/api/homenav');

//2.3 请求商品列表
export const getHomeshoplist = ()=>ajax(Base_URL + '/api/homeshoplist');

//2.4 请求推荐
// const PDD_BASE_URL = '/pdd_api';
// export const getRecommendshoplist = (params)=>ajax(PDD_BASE_URL,params);
export const getRecommendshoplist = (params)=>ajax(Base_URL + '/api/recommendshoplist',params);

//2.5 请求搜索的列表数据
export const getSearchGoods = ()=>ajax(Base_URL + '/api/searchgoods');

//2.6 获取短信验证码
export const getPhoneCode = (phone)=>ajax(Base_URL + '/api/send_msg',{phone:phone});

//2.7 手机验证码登录
export const phoneCodeLogin = (phone,code)=>ajax(Base_URL + '/api/login_code',{phone:phone,code},'POST');

//2.8 用户名和密码登录
export const pwdLogin = (name,pwd,captcha)=>ajax(Base_URL + '/api/login_pwd',{name,pwd,captcha},'POST');

//2.9获取登录的用户信息
export const getUserInfo = ()=>ajax(Base_URL + '/api/user_info');

//2.10退出登录
export const getLogout = ()=>ajax(Base_URL + '/api/logout');

//2.11修改用户信息
export const changeUserInfo = (user_id,user_name, user_sex, user_address, user_birthday, user_sign)=>ajax(Base_URL + '/api/change_user_msg',{user_id,user_name, user_sex, user_address, user_birthday, user_sign},'POST');

//2.12加入购物车
export const addGoodsToCart = (user_id,goods_id,goods_name,thumb_url,price)=>ajax(Base_URL + '/api/add_shop_cart',{user_id,goods_id,goods_name,thumb_url,price},'POST');

//2.13 获取购物车商品
export const getCartsGoods = ()=>ajax(Base_URL + '/api/cart_goods');
