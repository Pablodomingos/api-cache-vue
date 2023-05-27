import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import { API_URL } from '@/config/api'

axios.defaults.baseURL = API_URL

createApp(App)
    .use(router)
    .mount('#app')
