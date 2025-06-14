import { criticalComponents, prefetchComponents } from '../config/preload';

// Function to preload a component
const preloadComponent = (path) => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = path;
    document.head.appendChild(link);
};

// Preload critical components
export const preloadCriticalComponents = () => {
    criticalComponents.forEach(preloadComponent);
};

// Prefetch components for a specific route
export const prefetchRouteComponents = (route) => {
    const components = prefetchComponents[route];
    if (components) {
        components.forEach(preloadComponent);
    }
};

// Add preload hints to the document
export const addPreloadHints = () => {
    // Add critical component preloads
    criticalComponents.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = path;
        document.head.appendChild(link);
    });
}; 