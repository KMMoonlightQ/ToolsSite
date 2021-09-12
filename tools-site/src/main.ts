import { createApp } from 'vue'
import App from './App.vue'

//引入等宽字体
import 'vfonts/FiraCode.css'

//按需引入部分组件
import { create, NButton, NTabs, NTabPane, NCard, NAvatar } from 'naive-ui'

const naive = create({
  components: [NButton, NTabs, NTabPane, NCard, NAvatar],
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
