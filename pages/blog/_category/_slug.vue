<template>
  <Fragment v-if="post">
    <Navbar />
    <Header
      :background="post.featuredImage.url"
      :title="post.title"
      :date="formatDate(post.date)"
    />
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <article class="col-12 col-md-8 offset-md-2">
            <header>
              <h1 class="display-4 font-weight-normal" v-text="post.title" />
            </header>
            <small v-text="formatDate(post.date)" />
            <div class="mt-5" v-html="post.content.html" />
          </article>
        </div>
      </div>
    </section>
  </Fragment>
</template>

<script>
import { gql } from "graphql-request";
import { Fragment } from "vue-fragment";
import Navbar from "@/components/global/Navbar.vue";
import Header from "@/components/headers/Post.vue";

export default {
  async asyncData({ $graphcms, params }) {
    const { post } = await $graphcms.request(
      gql`
        query GetPost($slug: String) {
          post(where: { slug: $slug }) {
            title
            content {
              html
            }
            slug
            date
            createdAt
            updatedAt
            featuredImage {
              url
            }
          }
        }
      `,
      { slug: params.slug }
    );

    return { post };
  },

  components: {
    Header,
    Fragment,
    Navbar,
  },

  head() {
    return { title: this.post?.title };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("default", options).format(new Date(date));
    },
  },
};
</script>
