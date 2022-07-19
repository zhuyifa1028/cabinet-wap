import {createApp} from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'

import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'

createApp(App).use(store).use(router).use(NutUI).mount('#app')
