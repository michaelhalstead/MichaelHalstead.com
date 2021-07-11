<template>
  <div>
    <SEO title="Home" description="The website for Michael Halstead. Web Developer and sometimes blogger living in the great state of Washington." />
    <Navbar />
    <Header />
    <About />
    <CurrentlyReading />
    <!-- <RecentPosts :data="posts" /> -->
  </div>
</template>

<script>
import { gql } from "graphql-request";
import SEO from "@/components/SEO.vue";
import Navbar from "@/components/global/Navbar.vue";
import Header from "@/components/headers/home.vue";
import RecentPosts from "@/components/global/RecentPosts.vue";
import About from "@/components/pages/home/About.vue";
import CurrentlyReading from "@/components/pages/home/CurrentlyReading.vue";

export default {
  async asyncData({ $graphcms }) {
    return await $graphcms.request(
      gql`
        {
          posts(first: 3) {
            title
            slug
            excerpt
            date
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
  components: {
    Header,
    Navbar,
    RecentPosts,
    SEO,
    About,
    CurrentlyReading
  },
};
</script>