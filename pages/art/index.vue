<template>
  <div>
    <Navbar dark />
    <section class="bg-light pb-5">
      <section class="container">
        <h1 class="font-weight-normal display-4 pt-5 pb-3">Art</h1>

        <vue-masonry-wall
          :items="arts"
          :options="{ width: 400, padding: 12 }"
          :ssr="{ columns: 2 }"
          class="mb-3"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <a :href="item.image.url" target="_blank">
                <img :src="item.image.thumb" class="w-100" />
              </a>
            </div>
          </template>
        </vue-masonry-wall>
      </section>
    </section>
  </div>
</template>

<script>
import { gql } from "graphql-request";
import Header from "@/components/headers/Primary.vue";
import Navbar from "@/components/global/Navbar.vue";
import VueMasonryWall from "vue-masonry-wall";

export default {
  async asyncData({ $graphcms }) {
    return await $graphcms.request(
      gql`
        {
          arts {
            title
            description
            image {
              url
              thumb: url(transformation: { image: { resize: { width: 600 } } })
            }
          }
        }
      `
    );
  },

  data: () => ({
    page: 1,
    images: [],
  }),

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("default", options).format(new Date(date));
    },
  },

  components: { Header, Navbar, VueMasonryWall },
  beforeMount() {},
  head() {
    return { title: "Art | Michael Halstead" };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1140px;
}
</style>