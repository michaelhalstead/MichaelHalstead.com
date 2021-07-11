<template>
  <div>
    <footer class="bg-dark py-3 text-center text-white">
      <div class="container">
        <small> © {{ year }} Michael Halstead </small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getYear() + 1900,
  }),
};
</script>