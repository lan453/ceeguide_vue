import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zh from 'element-plus/es/locale/lang/zh-cn'
import { ElLoading } from 'element-plus'

const app1=createApp(App)

app1.mixin({
  beforeCreate() {
    document.title = '高考报考通';
  }
});
app1.use(ElementPlus,{
  locale: zh
}).use(ElLoading).mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app1.component(key, component)
}
