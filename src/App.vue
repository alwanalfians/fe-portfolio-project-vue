<script setup>
import { RouterView } from 'vue-router';
import { Suspense } from 'vue';
import ErrorBoundary from './components/ErrorBoundary.vue';
import LoadingFallback from './components/LoadingFallback.vue';
</script>

<template>
  <a-config-provider>
    <ErrorBoundary>
      <Suspense>
        <template #default>
          <RouterView />
        </template>
        <template #fallback>
          <LoadingFallback />
        </template>
      </Suspense>
    </ErrorBoundary>
  </a-config-provider>
</template>

<style scoped></style>
