<template>
    <div class="me-setting">
      <div>
        <me-common-cell left-icon="itlike-3" left-title="免密支付设置" :clickCell = "dealCellClick"/>
        <me-common-cell left-icon="itlike-2" left-title="免拼单设置" :clickCell = "dealCellClick"/>
        <me-common-cell left-icon="itlike-1"left-title="消息接收设置" right-title="接收" :clickCell = "dealCellClick"/>
      </div>
      <div style="margin-top: 10px">
        <me-common-cell left-icon="itlike-4" left-title="常见问题" :clickCell = "dealCellClick"/>
        <me-common-cell left-icon="itlike-5" left-title="意见反馈" :clickCell = "dealCellClick"/>
      </div>
      <div style="margin-top: 10px">
        <me-common-cell left-icon="itlike-1" left-title="联系客服" :clickCell = "dealCellClick"/>
      </div>
      <div class="logout" @click="dealLogOut">退出登录</div>
    </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell'
  import {Toast,MessageBox} from 'mint-ui'
  import {mapActions} from 'vuex'
    export default {
      name: "MeSetting",
      components:{
        MeCommonCell
      },
      methods:{
        ...mapActions(["getLogOut"]),
        dealCellClick(props){
          Toast('点击了' + props);
        },
        dealLogOut(){
          MessageBox.confirm('确定要退出登录？').then(action=>{
            if('confirm' === action){
              //退出登录
              let result = this.getLogOut({});
              //回到主界面
              this.$router.replace('/home');
            }
          });
        },
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.logout
  width 100%
  height 44px
  margin-top 10px
  background-color: #fff
  display flex
  justify-content center
  align-items center
  text-align center
</style>
