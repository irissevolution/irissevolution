import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// añadimos tailwind css
import './assets/tailwind.css'

createApp(App).use(store).use(router).mount('#app')
