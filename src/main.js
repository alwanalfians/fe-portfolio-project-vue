import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./routers";
import { preloadCriticalComponents, prefetchRouteComponents } from './utils/preload';

import "ant-design-vue/dist/reset.css";
import "./style.css";

// Preload critical components
preloadCriticalComponents();

// Prefetch components on route hover
router.beforeEach((to, from, next) => {
    if (to.path === "/") {
        next({ path: "/dashboard" });
    } else {
        // Prefetch components for the target route
        prefetchRouteComponents(to.path);
        next();
    }
});

const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount("#app");
