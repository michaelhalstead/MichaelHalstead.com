<template>
  <div>
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

export default {
  components: {
    // ContactForm,
    Footer,
  },
};
</script>