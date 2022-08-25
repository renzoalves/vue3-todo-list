import {
    createApp
} from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/main.css'

createApp(App).use(store)
    .use(store)
    .mount('#app')