import {createApp} from 'vue';
import App from './App.vue';

import './assets/materialize/fonts/icon.css';
import './assets/materialize/materialize.min.css';
import './assets/scss/style.scss';

import router from './router';
import store from './store';

import Plugins from './utils/plugins';
import {toolTip} from './directives/directives';

const app = createApp(App);

app.directive('toolTip', toolTip);

app.use(router);
app.use(store);
app.use(Plugins);

app.mount('#app');
