<template>
  <div>
    <SEO title="Blog" description="Recents posts, including: poetry, essays, etcetera." />
    <Navbar dark />
    <section class="bg-light pb-5">
      <section class="container">
        <h1 class="font-weight-normal display-4 pt-5 pb-3">Recent Posts</h1>

        <div class="row">
          <div class="col-12 col-lg-8 mb-3 mb-md-0">
            <NuxtLink
              :to="{
                name: 'blog-category-slug',
                params: {
                  category: posts[0].category.slug,
                  slug: posts[0].slug,
                },
              }"
            >
              <div
                class="post-card"
                :style="`--background: url(${
                  posts[0].featuredImage
                    ? posts[0].featuredImage.url
                    : `https://via.placeholder.com/1920x800?text=${posts[0].title}`
                })`"
              >
                <span class="badge bg-dark" v-text="posts[0].category.title" />
                <div class="content text-white">
                  <p
                    class="display-5 mb-0 font-weight-regular"
                    v-text="posts[0].title"
                  />
                  <small v-text="formatDate(posts[0].date)" />
                </div>
              </div>
            </NuxtLink>
          </div>
          <div
            class="col-12 col-lg-4 recent-sidebar d-flex justify-content-between flex-column flex-md-row flex-lg-column"
          >
            <NuxtLink
              :to="{
                name: 'blog-category-slug',
                params: {
                  category: posts[1].category.slug,
                  slug: posts[1].slug,
                },
              }"
              class="w-100 me-0 me-md-1 me-lg-0 mb-3 mb-md-0"
            >
              <div
                class="post-card"
                :style="`--background: url(${
                  posts[1].featuredImage
                    ? posts[1].featuredImage.url
                    : `https://via.placeholder.com/1920x800?text=${posts[1].title}`
                })`"
              >
                <span class="badge bg-dark" v-text="posts[1].category.title" />
                <div class="content text-white">
                  <p
                    class="display-5 mb-0 font-weight-regular"
                    v-text="posts[1].title"
                  />
                  <small v-text="formatDate(posts[1].date)" />
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              :to="{
                name: 'blog-category-slug',
                params: {
                  category: posts[2].category.slug,
                  slug: posts[2].slug,
                },
              }"
              class="w-100 ms-0 ms-md-1 ms-lg-0 mb-3 mb-md-0"
            >
              <div
                class="post-card"
                :style="`--background: url(${
                  posts[2].featuredImage
                    ? posts[2].featuredImage.url
                    : `https://via.placeholder.com/1920x800?text=${posts[2].title}`
                })`"
              >
                <span class="badge bg-dark" v-text="posts[2].category.title" />
                <div class="content text-white">
                  <p
                    class="display-5 mb-0 font-weight-regular"
                    v-text="posts[2].title"
                  />
                  <small v-text="formatDate(posts[2].date)" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <div class="container mt-5" v-if="categories.poetry && categories.poetry.length">
        <div
          class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
        >
          <h1 class="font-weight-normal text-center display-5">Poetry</h1>
          <p class="mb-0 small" v-if="categories.poetry.length > 4">
            <NuxtLink
              to="/blog/poetry"
              style="text-decoration: none"
              class="text-dark"
              >See All →
            </NuxtLink>
          </p>
        </div>
        <div class="row">
          <NuxtLink
            v-for="post in categories.poetry.posts"
            :key="post.slug"
            :to="{
              name: 'blog-category-slug',
              params: { category: post.category.slug, slug: post.slug },
            }"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div
              class="post-card"
              :style="`--background: url(${
                post.featuredImage
                  ? post.featuredImage.url
                  : `https://via.placeholder.com/1920x800?text=${post.title}`
              })`"
            >
              <div class="content text-white">
                <p class="mb-0 font-weight-bold" v-text="post.title" />
                <small v-text="formatDate(post.date)" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="container mt-5 mb-4" v-if="categories.essays && categories.essays.length">
        <div
          class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
        >
          <h1 class="font-weight-normal text-center display-5">Essays</h1>
          <p class="mb-0 small" v-if="categories.essays.length > 4">
            <NuxtLink
              to="/blog/essays"
              style="text-decoration: none"
              class="text-dark"
              >See All →
            </NuxtLink>
          </p>
        </div>
        <div class="row">
          <NuxtLink
            v-for="post in categories.essays.posts"
            :key="post.slug"
            :to="{
              name: 'blog-category-slug',
              params: { category: post.category.slug, slug: post.slug },
            }"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div
              class="post-card"
              :style="`--background: url(${
                post.featuredImage
                  ? post.featuredImage.url
                  : `https://via.placeholder.com/1920x800?text=${post.title}`
              })`"
            >
              <div class="content text-white">
                <p class="mb-0 font-weight-bold" v-text="post.title" />
                <small v-text="formatDate(post.date)" />
              </div>
            </div>
          </NuxtLink>
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
  async asyncData({ $graphcms }) {
    return await $graphcms.request(
      gql`
        {
          posts {
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
        }
      `
    );
  },

  data: () => ({
    page: 1,
    categories: {},
  }),

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("default", options).format(new Date(date));
    },
    paginated(posts) {
      const base = this.page * 10 - 10;
      return posts.slice(base, base + 10);
    },
    category(cat) {
      const items = this.posts.filter((post) => post.category.slug === cat);
      return { posts: items.slice(0, 4), length: items.length };
    },
  },

  components: { Header, Navbar, SEO },
  beforeMount() {
    this.categories = {
      poetry: this.category("poetry"),
      essays: this.category("essays"),
    };
  },
  head() {
    return { title: "Blog | Michael Halstead" };
  },
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
  background-size: cover;
  background-position: center;
  width: 100%;
  position: relative;
  transition: 1s all ease;
}

.post-card {
  padding-bottom: 56.75%;
  background-size: auto 100%;
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