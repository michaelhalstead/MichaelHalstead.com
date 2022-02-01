<template>
  <div v-if="post">
    <SEO :title="post.title" :image="post.featuredImage.url" />
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
            <div class="mt-5" v-html="content()" />
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gql } from "graphql-request";
import SEO from "@/components/SEO.vue";
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
    SEO,
    Header,
    Navbar,
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };

      return new Intl.DateTimeFormat("default", options).format(new Date(date));
    },
    content() {
      return this.post.content.html.replace(/\[tab\]/gi, '<span class="tab"></span>')
    }
  },
  beforeMount() {
    this.$store.commit('global/makeNavLight');
  }
};
</script>