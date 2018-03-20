import Vue from 'vue';
import App from './app.vue';

import './assets/styles/test.css';
import './assets/styles/test-stylus.styl';
import './assets/images/9.jpg';

const div = document.createElement('div');
document.body.appendChild(div);

new Vue({
	render: h => h(App)
}).$mount(div);
