import { defineAsyncComponent } from 'vue';
import ChartSkeleton from './ChartSkeleton.vue';

const asyncOptions = {
    loadingComponent: ChartSkeleton,
    delay: 200,
    timeout: 3000,
    suspensible: false
};

export const UserEngagementChart = defineAsyncComponent(() => 
    import('./UserEngagementChart.vue'), 
    asyncOptions
);
export const ContentPerformanceChart = defineAsyncComponent(() => 
    import('./ContentPerformanceChart.vue'), 
    asyncOptions
);
export const TrafficSourcesChart = defineAsyncComponent(() => 
    import('./TrafficSourcesChart.vue'), 
    asyncOptions
);
export const PublishingActivityChart = defineAsyncComponent(() => 
    import('./PublishingActivityChart.vue'), 
    asyncOptions
); 