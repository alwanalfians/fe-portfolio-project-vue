// Critical components that should be preloaded
export const criticalComponents = [
    '/src/components/layout/HeadBar.vue',
    '/src/components/layout/SideBar.vue',
    '/src/components/layout/ContentSection.vue',
    '/src/components/HeaderTable.vue'
];

// Components that should be prefetched when user hovers over navigation
export const prefetchComponents = {
    '/dashboard': [
        '/src/components/charts/UserEngagementChart.vue',
        '/src/components/charts/ContentPerformanceChart.vue',
        '/src/components/charts/TrafficSourcesChart.vue',
        '/src/components/charts/PublishingActivityChart.vue'
    ],
    '/data/educations': [
        '/src/components/HeaderTable.vue'
    ],
    '/data/experiences': [
        '/src/components/HeaderTable.vue'
    ]
}; 