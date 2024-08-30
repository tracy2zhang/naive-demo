<template>
  <n-button @click="toggle">toggle</n-button>
  <div v-if="visible" class="detached-element">
    <n-checkbox>复选框</n-checkbox>
    <div
      style="width: 100px; border: 1px solid; max-height: 500px; overflow: auto"
    >
      <div v-for="n in 1000">{{ n }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const visible = ref(false);
  const toggle = () => {
    visible.value = !visible.value;
  };
</script>


<style scoped></style>