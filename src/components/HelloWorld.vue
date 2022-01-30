<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: { type: String, required: true },
  name: { type: String, default: 'Jane' },
});
</script>

<template>
  <p>{{ props.message }}</p>
  <p>{{ props.name }}</p>
</template>
