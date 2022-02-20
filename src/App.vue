<script setup>
import Hello from './components/HelloWorld.vue';
import { ref } from 'vue';

const name = ref('John');

const handleEvent = (newName) => {
  name.value = `${newName.firstName} ${newName.lastName}`;
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <Hello @changeNameEvent="handleEvent" :name="name" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
