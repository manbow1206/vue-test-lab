<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  price: Number,
});
</script>

<template>
  <p>{{ props.price + 100 }}</p>
</template>
