<template>
  <header class="py-5" :style="`--background: url(${background})`">
  </header>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  margin-top: -66px;
  background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)), var(--background);
  background-size: cover;
  background-position: center;
  height: 300px;
}
</style>