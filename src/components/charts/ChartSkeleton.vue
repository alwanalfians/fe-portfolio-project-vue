<template>
    <div class="chart-skeleton">
        <div class="skeleton-header"></div>
        <div class="skeleton-chart"></div>
    </div>
</template>

<style scoped>
.chart-skeleton {
    width: 100%;
    height: 300px;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
}

.skeleton-header {
    height: 24px;
    width: 60%;
    background: #f0f0f0;
    margin-bottom: 16px;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
}

.skeleton-chart {
    height: calc(100% - 40px);
    background: #f0f0f0;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
</style> 