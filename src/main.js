import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Bootstrap 관련 JavaScript와 CSS 로딩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//App컴포넌트를 <div id="app"></div>에 내용으로 추가
createApp(App).use(router).mount('#app')
