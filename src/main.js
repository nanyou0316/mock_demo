import Vue from 'vue'
import App from './App.vue'
import '../mock'

const files=require.context('./views',true,/\.*viewMock\.js$/)
let a=[]
files.keys().forEach(item=>
  a=a.concat(files(item).default)
)
console.log("A:",a);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
