<script setup>
import { ref } from '@vue/reactivity';
const name = ref('');
</script>

<template>
  <form @submit.prevent="$emit('submitForm', name)">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>
