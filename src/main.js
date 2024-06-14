<<<<<<< HEAD
import './assets/main.scss'
=======
>>>>>>> 84a547d4bcb5344c76a791b328b5d725131b9a62

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
