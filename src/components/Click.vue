<script setup>
import { ref } from '@vue/reactivity';

const count = ref(0);

const increment = () => {
  count.value += 1;
};
</script>

<template>
  <p>Count is: {{ count }}</p>
  <button @click="increment">+</button>
</template>
