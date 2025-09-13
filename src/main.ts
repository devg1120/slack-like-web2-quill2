import { createApp } from 'vue'
import Tooltip from "@programic/vue3-tooltip";
// Import the CSS or use your own!
import '@programic/vue3-tooltip/dist/index.css';

import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')
const app = createApp(App)
const options = {
    placement: "bottom",
};

app.use(Tooltip, options);
app.mount('#app')
