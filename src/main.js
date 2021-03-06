import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'

// 全局样式
import '@/assets/css/global.scss'
// 字体图标
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
