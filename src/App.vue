<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="item,index in arr" :key="index">{{item.coverUrl}}</li>
    </ul>
    <div>{{obj}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      arr:[],
      obj:{}
    }
  },
  mounted() {
    axios.get('/mock/getVideo').then(
      (res) => {
          this.arr=res.data.list,
          this.obj=res
        }
    )
    axios.get('/api/userInfo').then(res=>console.log('res:',res))
    axios.get('/api/userInfo1').then(res=>console.log('res:',res))
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
