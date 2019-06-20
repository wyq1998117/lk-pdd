<template>
  <div class="me">
    <div v-if="userInfo.id">
      <me-top />
    </div>
    <select-login  v-else/>
  </div>
</template>

<script>
  import SelectLogin from './../Login/SelectLogin'
  import {mapState} from 'vuex'
  import MeTop from './MeTop'
    export default {
      name: "Me",
      components: {
        SelectLogin,
        MeTop
      },
      computed:{
        ...mapState(['userInfo'])
      },
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    background: #f5f5f5
    width: 100%
    height: 100%
</style>
