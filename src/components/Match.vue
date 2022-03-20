<script setup>
import { defineProps } from '@vue/reactivity';

// const admin = ref(false);
const props = defineProps({
  admin: Boolean,
});
</script>

<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-show="props.admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>
