<template>
  <p v-if="message">{{ message }}</p>
  <a href="#"></a>

</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>