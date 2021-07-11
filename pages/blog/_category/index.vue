<template>
  <div>
    <SEO :title="getCategory()" description="" />
    <Navbar dark />
    <section class="bg-light">
      <header class="container pt-5 pb-4">
        <p class="mb-0 small">
          <NuxtLink
            to="/blog"
            style="text-decoration: none"
            class="text-dark"
            >← Back to all
          </NuxtLink>
        </p>
        <h1 class="font-weight-normal display-2">{{ getCategory() }}</h1>
      </header>
      <div class="container py-4">
        <div class="row gx-5">
          <div class="col-12">
            <div class="row">
              <!-- <div v-for="post in posts" :key="post.slug" class="post-card mb-4">
              <div class="post-card-head">
                <img
                  :src="post.featuredImage && post.featuredImage.url"
                  class="w-100"
                />
              </div>
              <h3 v-text="post.title" class="mt-3 mb-1" />
              <small class="d-block">{{ formatDate(post.date) }}</small>
              <p class="mb-0 mt-3" v-text="post.excerpt" v-if="post.excerpt" />
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: post.slug } }"
                class="btn btn-dark btn-sm mt-4"
                >Read More</NuxtLink
              >
            </div> -->
              <NuxtLink
                v-for="post in paginated(posts)"
                :key="post.slug"
                :to="{
                  name: 'blog-category-slug',
                  params: { category: post.category.slug, slug: post.slug },
                }"
                class="col-12 col-sm-6 col-md-4"
              >
                <div
                  class="post-card mb-5"
                  :style="`--background: url(${
                    post.featuredImage
                      ? post.featuredImage.url
                      : `https://via.placeholder.com/1920x800?text=${post.title}`
                  })`"
                >
                  <span class="badge bg-dark" v-text="post.category.title" />
                  <div class="content text-white">
                    <p
                      class="h3 mb-0 font-weight-regular"
                      v-text="post.title"
                    />
                    <small v-text="formatDate(post.date)" />
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gql } from "graphql-request";
import SEO from "@/components/SEO.vue";
import Header from "@/components/headers/Primary.vue";
import Navbar from "@/components/global/Navbar.vue";

export default {
  async asyncData({ $graphcms, params }) {
    const category = params.category;
    return await $graphcms.request(
      gql`
        {
          posts(where: {category: {slug: "${category}"}}) {
            title
            slug
            date
            excerpt
            category {
              title
              slug
            }
            featuredImage {
              url
            }
          }
          category(where: { slug: "${category}" }) {
            title
            heroImage {
              url
            }
          }
        }
      `
    );
  },

  data: () => ({
    page: 1,
  }),

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("default", options).format(new Date(date));
    },
    paginated(posts) {
      const base = this.page * 21 - 21;
      console.log(posts);
      return posts.slice(base, base + 21);
    },
    getCategory() {
      return this.posts[0].category.title;
    },
  },

  components: { SEO, Header, Navbar },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1140px;
}
.sidebar-item {
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease;
}

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
</style>