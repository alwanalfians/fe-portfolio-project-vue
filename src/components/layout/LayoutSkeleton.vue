<template>
    <div class="layout-skeleton">
        <div class="skeleton-header"></div>
        <div class="skeleton-content">
            <div class="skeleton-sidebar"></div>
            <div class="skeleton-main">
                <div class="skeleton-breadcrumb"></div>
                <div class="skeleton-body"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout-skeleton {
    width: 100%;
    min-height: 100vh;
    background: #fff;
}

.skeleton-header {
    height: 64px;
    background: #f0f0f0;
    animation: pulse 1.5s infinite;
}

.skeleton-content {
    display: flex;
    min-height: calc(100vh - 64px);
}

.skeleton-sidebar {
    width: 200px;
    background: #f0f0f0;
    animation: pulse 1.5s infinite;
}

.skeleton-main {
    flex: 1;
    padding: 24px;
}

.skeleton-breadcrumb {
    height: 24px;
    width: 60%;
    background: #f0f0f0;
    margin-bottom: 24px;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
}

.skeleton-body {
    height: calc(100% - 48px);
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