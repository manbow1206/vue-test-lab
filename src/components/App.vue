<script setup>
import { computed, ref } from 'vue';
const name = ref('John');
const upperCaseName = computed(() => {
  return name.value.toUpperCase();
});
const admin = ref(false);
</script>

<template>
  <div>{{ upperCaseName }}</div>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>
