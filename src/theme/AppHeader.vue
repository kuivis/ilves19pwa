<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/page/mobiili" class="navbar-item">
        <h1>ILVES19</h1>
      </router-link>

      <div
        class="navbar-burger burger"
        data-target="navMenuColorprimary-example"
        v-on:click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div v-bind:class="{ 'navbar-menu': true, 'is-active': isMenuActive }">
      <div class="navbar-start"></div>

      <div v-bind:class="{ 'navbar-end': true, 'is-active': isMenuActive }">
        <div class="navbar-item">
          <span v-on:click="closeMenu">
            <router-link class="is-tab nav-item" to="/kategoria/blogit/">Ilves-blogit</router-link>
          </span>
        </div>
        <div class="navbar-item">
          <span v-on:click="closeMenu">
            <router-link class="is-tab nav-item" to="/kategoria/uutiset/">Uutiset</router-link>
          </span>
        </div>
        <div class="navbar-item">
          <span v-on:click="closeMenu">
            <router-link class="is-tab nav-item" to="/page/about-bill/"
              >About</router-link
            >
          </span>
        </div>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="button"
                target="_blank"
                rel="noopener"
                href="https://instagram.com/ilves19"
              >
                <span class="icon">
                  <i class="icon-instagram"></i>
                </span>
                <span>IG</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: "app-header",
    data: () => {
      return {
        isMenuActive: false,
        siteName: "",
        blogItems: []
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive;
      },
      closeMenu() {
        this.isMenuActive = false;
      },
      relativePath(url) {
        url = url.replace("https://", "");
        var domain = url.split("/")[0];
        return url.replace(domain, "");
      }
    }
  };
</script>
<style lang="scss">
@import '../_variables';
  .navbar {
    background-color: $primary !important;
  }
  #vwp-logo {
    max-width: 350px;
    max-height: 3rem;
  }
  #app-header .nav-menu > span > a {
    vertical-align: middle;
  }
  .nav-toggle {
    position: absolute;
    right: 0;
  }
</style>
