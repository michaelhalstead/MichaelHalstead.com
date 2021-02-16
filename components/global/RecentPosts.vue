<template>
  <section class="pb-1">
    <div class="container py-5">
      <!-- <h1 class="text-center mb-5 font-weight-normal display-5">Recent Posts</h1> -->
      <div
        class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
      >
        <h1 class="font-weight-normal text-center display-5">Recent Posts</h1>
        <p class="mb-0 small">
          <NuxtLink to="/blog" style="text-decoration: none" class="text-dark"
            >See All 🠒
          </NuxtLink>
        </p>
      </div>
      <div class="row">
        <NuxtLink
          v-for="post in data"
          :key="post.slug"
          :to="{ name: 'blog-category-slug', params: { category: post.category.slug, slug: post.slug } }"
          class="col-12 col-sm-4 mb-3"
        >
          <div
            class="post-card"
            :style="`--background: url(${
              post.featuredImage
                ? post.featuredImage.url
                : `https://via.placeholder.com/1920x800?text=${post.title}`
            })`"
          >
            <span class="badge bg-dark" v-text="post.category.title" />
            <div class="content text-white">
              <p class="h4 mb-0 font-weight-bold" v-text="post.title" />
              <small v-text="formatDate(post.date)" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("default", options).format(new Date(date));
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    var(--background);
  background-size: auto 100%;
  background-position: center;
  width: 100%;
  padding-bottom: 56.75%;
  position: relative;
  transition: 1s all ease;
  &:hover {
    background-size: auto 105%;
  }
  .content {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 15px;
  }
}
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
.container {
  max-width: 1140px;
  .feather {
    height: 0.8rem;
    width: auto;
    margin-bottom: 3px;
    margin-left: 3px;
  }
}
</style>