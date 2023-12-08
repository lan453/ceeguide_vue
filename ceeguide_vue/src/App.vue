<template>
  <mainCom></mainCom>
  <div class="bei-bottom">
    <a class="jgawb" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52263302000150" target="_blank"
      style="color: rgb(116, 154, 227) !important;">
      <img class="beian-image" src="./assets/gonganbeian.png" alt="Logo" style="object-fit: contain;">
      &nbsp;贵公网安备52263302000150号
    </a>
    <a class="jicpb" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
      style="color: rgb(116, 154, 227) !important; margin-left: 20px;">
      黔ICP备2023014836号-2&nbsp;&nbsp;&nbsp;
    </a>
  </div>
</template>

<script>
import mainCom from './components/mainCom.vue'
export default {
  name: 'App',
  components: {
    mainCom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bei-bottom {
  text-align: center;
  height: 20px;
  margin-bottom: 0px;
  float: bottom;
}

.bei-bottom a {
  text-decoration: none;
  color: #353030;
}

.beian-image {
  margin-left: 5px;
  top: 5px;
  width: 16px;
  height: auto;
  position: relative;
  top: 2px;
}
</style>
