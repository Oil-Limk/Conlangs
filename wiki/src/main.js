import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import './main.css'

// font-awesome-icon
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas);
library.add(far);
library.add(fab);

// i18n
import i18n from './i18n'

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.use(i18n)
app.mount('#app')
