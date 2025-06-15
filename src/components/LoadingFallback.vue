<template>
  <div class="loading-fallback">
    <a-spin size="large" />
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.loading-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 16px;
}

.loading-fallback p {
  color: #666;
  font-size: 16px;
}
</style> 