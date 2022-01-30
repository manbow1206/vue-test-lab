<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isAdmin: Boolean,
});
</script>

<template>
  <h2>初めてのコンポーネント</h2>
  <p v-if="props.isAdmin">管理者です。</p>
  <p v-else>管理者ではありません。</p>
</template>
