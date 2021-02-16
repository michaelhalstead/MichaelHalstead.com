<template>
  <Fragment>
    <footer class="bg-dark py-3 text-center text-white">
      <div class="container">
        <small> © {{ year }} Michael Halstead </small>
      </div>
    </footer>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  data: () => ({
    year: new Date().getYear() + 1900,
  }),
  components: { Fragment },
};
</script>