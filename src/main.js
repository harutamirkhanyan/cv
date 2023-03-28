import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/_main.scss'
import store from './store'
import scrollTo from '@/plugins/scrollTo';


createApp(App).use(store).use(scrollTo).mount('#app')
