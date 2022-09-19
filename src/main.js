// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";

// createApp(App).use(store).use(router).mount("#app");


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import { store } from '../src/store'
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App).use(createStore(store)).use(router);
app.config.globalProperties.emitter = emitter;
app.mount('#app')