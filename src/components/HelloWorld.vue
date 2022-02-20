<script setup>
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps({
  name: String,
});

const name = ref(props.name);

const emit = defineEmits(['changeNameEvent']);

const changeName = () => {
  emit('changeNameEvent', name.value);
};
</script>

<template>
  <h2>子コンポーネント</h2>
  <p>Hello {{ props.name }}</p>
  <input type="text" v-model="name" @input="changeName" />
</template>
