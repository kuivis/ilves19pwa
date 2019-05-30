<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Ilves19</strong> 
          </p>
          <div class="display-inline">
            <a
              :href="item.href"
              target="_blank"
              v-for="item in socialLinks"
              v-bind:key="item.src"
            >
              <clazy-load class="alignleft" :key="item.alt" :src="item.src">
                <img
                  :alt="item.alt"
                  :src="item.src"
                  style="height:40px;"
                  slot="image"
                />
                <div slot="placeholder">
                  ...
                </div>
              </clazy-load>
            </a>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  let Config = require("../app.config.js");
  export default {
    name: "app-footer",
    data: () => {
      return {
        socialLinks: [
          {
            alt: "Facebook",
            href: "https://www.facebook.com/ilves19",
            src: `${Config.wpDomain}wp-content/uploads/2017/02/fbBtn.png`
          }
        ]
      };
    }
  };
</script>
<style lang="scss">
@import '../_variables';
  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0;
  height: $footerHeight;
  background-color: $primary !important;
  }
</style>