<template>
  <header class="py-5" :style="`--background: url(${background})`">
    <div class="container pt-5 pb-4 text-center text-white">
      <h1 class="font-weight-normal display-2" v-text="title" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
header {
  margin-top: -66px;
  background-image: var(--background);
  background-size: cover;
  background-position: center;
}
</style>