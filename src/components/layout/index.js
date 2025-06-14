import { defineAsyncComponent } from 'vue';
import LayoutSkeleton from './LayoutSkeleton.vue';

const asyncOptions = {
    loadingComponent: LayoutSkeleton,
    delay: 200,
    timeout: 3000,
    suspensible: false
};

export const HeadBar = defineAsyncComponent(() => 
    import('../HeadBar.vue'), 
    asyncOptions
);
export const SideBar = defineAsyncComponent(() => 
    import('../SideBar.vue'), 
    asyncOptions
);
export const BreadCrumbBar = defineAsyncComponent(() => 
    import('../BreadCrumbBar.vue'), 
    asyncOptions
);
export const ContentSection = defineAsyncComponent(() => 
    import('../ContentSection.vue'), 
    asyncOptions
);
export const FootBar = defineAsyncComponent(() => 
    import('../FootBar.vue'), 
    asyncOptions
); 