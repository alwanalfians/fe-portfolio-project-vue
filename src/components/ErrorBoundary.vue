<template>
  <div v-if="error" class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{{ error.message }}</p>
    <button @click="resetError">Try Again</button>
  </div>
  <slot v-else></slot>
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';

const error = ref(null);

onErrorCaptured((err) => {
  error.value = err;
  return false; // Prevent error from propagating
});

const resetError = () => {
  error.value = null;
};
</script>

<style scoped>
.error-boundary {
  padding: 20px;
  text-align: center;
  color: #ff4d4f;
}

.error-boundary button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-boundary button:hover {
  background-color: #40a9ff;
}
</style> 