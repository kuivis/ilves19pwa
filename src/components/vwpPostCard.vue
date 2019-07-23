<template>
<md-card class="md-primary" md-theme="green-card">
   <md-card-media>
      <div class="image" v-if="post.better_featured_image">
        <clazy-load v-bind:src="post.better_featured_image.source_url">
          <img
            v-on:click="gotoPost(post)"
            v-bind:alt="post.better_featured_image.description"
            v-bind:src="post.better_featured_image.source_url"
            slot="image"
          />
          <div slot="placeholder">
            <img src="/assets/ilves19_logo_web_black.png" alt="Ilves" />
          </div>
        </clazy-load>
      </div>
    </md-card-media>

<md-card-header>
      <div class="md-title">
        <span v-on:click="gotoPost(post)" v-html="post.title.rendered"></span>
      </div>
      <div class="md-subhead">{{ formatDate(post.date) }}</div>
    </md-card-header>
   
     <md-card-content>
      <span v-html="post.excerpt.rendered">></span>
      <br>
      <small>Ikäkausi: {{ this.haeNimiLista(post.ikakausi)}}</small>
    </md-card-content>
     <md-card-actions>
      <!--<md-button>Jaa linkki</md-button>-->
      <md-button v-on:click="gotoPost(post)">Avaa</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  import Config from "../app.config.js";
  export default {
    name: "vwp-post-card",
    props: ["post", "categorySlug", "newFlag"],
    methods: {
      gotoPost: function(post) {
        if (this.categorySlug && post && post.slug) {
          this.$router.push({
            path: "/kategoria/" + this.categorySlug + "/" + post.slug
          });
        }
      },
      cdnUrl: function(url) {
        return url.replace("https://api.fullstackweekly.com/", Config.wpDomain);
      },
      isNew: function(postDateStr) {
        let postDate = new Date(postDateStr);
        postDate.setDate(postDate.getDate() + 6);
        // If new flag is set and it is posted in the last 6 days
        return this.newFlag && postDate.getTime() - new Date().getTime() > 0;
      }
    }
  };
</script>

<style lang="scss">
  @import "../_variables";

.md-app-content .md-card {
  margin: 0;
  margin-bottom: 8px;
}

.md-card {
  display: inline-block;
  vertical-align: top;
  width: 100%;
}

  .vwp-post-card {
    min-height: 350px;
    padding-bottom: 40px;
    height: 100%;
    &.new {
      border: 1px solid #898989;
    }
    .post-title a {
      font-size: $size-4;
      padding: 0 0 10px 0;
      font-weight: bold;
    }
    .card-image img {
      max-height: 250px;
      width: auto;
      margin: 0 auto;
    }
    .content {
      word-break: normal;
      word-wrap: break-word;
      .is-new {
        float: right;
        font-size: 80%;
        font-style: italic;
      }
    }
    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
</style>
