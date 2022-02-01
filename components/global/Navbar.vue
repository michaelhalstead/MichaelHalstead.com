<template>
  <div>
    <nav v-bind:class="[navStyle, 'navbar navbar-expand-lg sticky-top navbar-dark']" ref="nav">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/logo.svg" alt="Michael Halstead" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#mobileNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-weight-medium">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" exact>Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/art" class="nav-link">Art</NuxtLink>
            </li>
            <!-- <li class="nav-item">
            <NuxtLink to="/harley" class="nav-link">Harley</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="modal modal-fullscreen fade"
      id="mobileNav"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <button
              data-bs-dismiss="modal"
              aria-label="Close"
              class="text-white btn p-0"
              ref="closeModal"
            >
              <span aria-hidden="true" class="display-4">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <NuxtLink to="/" class="nav-link text-white display-5" exact
              >Home</NuxtLink
            >
            <NuxtLink to="/blog" class="nav-link text-white display-5"
              >Blog</NuxtLink
            >
            <NuxtLink to="/art" class="nav-link text-white display-5"
              >Art</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      bg: this.navStyle,
      isDark: false,
      progress: 0,
    };
  },
  props: {
    dark: {
      type: Boolean,
    },
  },
  computed: {
    navStyle() {
      return this.$store.state.global.navbar;
    }
  },
  methods: {
    handleScroll() {
      if (this.navStyle === 'bg-dark') {
        return;
      }

      const ref = this.$refs.nav;
      if (window.scrollY > 66 && !ref.classList.contains("bg-dark"))
        ref.classList.add("bg-dark");
      else if (window.scrollY < 67 && ref.classList.contains("bg-dark"))
        ref.classList.remove("bg-dark");
    },
    closeModal() {
      this.$refs.closeModal.click();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.closeModal.click();
  },
  destroyed() {
    if (!this.navStyle === 'dark') {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>

<style scoped>
nav {
  transition: all 500ms ease-in-out;
}
.modal {
  position: sticky;
}
.navbar-brand img {
  height: 40px;
}

.modal-fullscreen {
  margin-top: -66px;
}

.modal-fullscreen .modal-dialog,
.modal-fullscreen .modal-content {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
}

.modal-header {
  border-bottom: none;
  justify-content: flex-end;
}

.modal-content {
  background: #16130f;
}
</style>