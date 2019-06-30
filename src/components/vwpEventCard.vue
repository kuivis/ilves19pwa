<template>
  <md-card>
    <md-card-media>
      <img src="http://www.ilves19.fi/sandbox/wp-content/uploads/ilves19_logo_web_black.png" alt="Ilves">
    </md-card-media>

    <md-card-header>
      <div class="md-title">
        <a v-on:click="gotoPost(post)">
          <span v-html="post.title.rendered"></span>
        </a>
      </div>
      <div class="md-subhead">{{ post.date }}</div>
    </md-card-header>

    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>

    <md-card-content>
      <span v-html="post.excerpt.rendered">></span>
      <br>
      <small>{{ post.date }}</small>
      <br>
      <small>Tapahtumapaikka: {{ post.cmb2.lippukuntateema_event_metabox.lippukuntateema_event_location }}</small>
      <br>
      <small>Alkamisaika: {{ post.cmb2.lippukuntateema_event_metabox.lippukuntateema_event_date_start }}</small>
      <br>
      <small>Päättymisaika: {{ post.cmb2.lippukuntateema_event_metabox.lippukuntateema_event_date_end}}</small>
      <br>
      <small>ikäkaudet: {{ post.ikakausi }}</small>
      <router-link :to="'/tapahtumat/' + post.slug" class="card-footer-item">Lue lisää</router-link>
    </md-card-content>
  </md-card>
</template>

<script>
import Config from "../app.config.js";
export default {
  name: "vwp-event-card",
  props: ["post", "newFlag"],
  methods: {
    gotoPost: function(post) {
      if (post && post.slug) {
        this.$router.push({
          path: "/tapahtumat/" + post.slug
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
.card-reservation {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .md-icon {
    margin: 8px;
  }
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
