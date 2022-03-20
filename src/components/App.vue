<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  msg: String,
});
</script>

<template>
  <div>Hello {{ props.msg }}</div>
</template>
