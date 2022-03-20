<script setup>
import { ref } from '@vue/reactivity';
const count = ref(1);

</script>

<template>
  <button @click="$emit('incrementCount', count , 'test')">+</button>
</template>
<script>