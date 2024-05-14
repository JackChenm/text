import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'
import ElementPlus from 'element-plus'
import './main.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
.use(ElementPlus)
.mount('#app')
