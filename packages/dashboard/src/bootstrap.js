import { createApp } from 'vue';
import Dashoard from './components/Dashboard.vue';

const mount = (el) => {

    const app = createApp(Dashoard);
    app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_dashboard-dev-root');
    if (el) {
        mount(el);
    }
}

// running thru a container and should export mount function
export { mount };
