import { ViteSSG } from 'vite-ssg/single-page';
import App from './App.vue';
import 'element-plus/theme-chalk/base.css';
export const createApp = ViteSSG(App);
