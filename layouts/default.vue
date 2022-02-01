<template>
  <div>
    <Navbar />
    <main>
      <Nuxt />
    </main>
    <!-- <ContactForm /> -->
    <Footer />
  </div>
</template>

<script>
// import ContactForm from "@/components/global/ContactForm.vue";
import Footer from "@/components/global/Footer.vue";
import Navbar from "@/components/global/Navbar.vue";

export default {
  components: {
    // ContactForm,
    Navbar,
    Footer,
  },
};
</script>