<template>
  <section>
    <md-tabs>
      <md-tab id="tab-home" md-label="Ilves uutiset" exact>
        <div class="clearfix"></div>
        <div
          class="columns category-posts"
          v-if="!categories || categories.length === 0"
        >Ladataan juttuja...</div>
        <vwp-subcategory :categories="categories"></vwp-subcategory>
      </md-tab>

      <md-tab id="tab-pages" md-label="Ilves somefeedi">
        <link
          href="https://assets.juicer.io/embed.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <ul class="juicer-feed" data-feed-id="ilves19" data-columns="1" data-per="10"></ul>
      </md-tab>
    </md-tabs>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import VwpSubcategory from "components/vwpSubcategory.vue";
const fetchInitialData = (store, route) => {
  route.params.page = route.params.page || 1;
  console.log("category, fetchInitialData, page:" + route.params.page);
  return store.dispatch(`category/getCategory`, {
    categorySlug: route.params.id,
    page: route.params.page
  });
};

export default {
  name: "ThemePageCategory",
  components: {
    "vwp-subcategory": VwpSubcategory
  },
  computed: {
    ...mapGetters("category", ["categories"])
  },
  methods: {
    loadPosts() {
      fetchInitialData(this.$store, this.$route);
    }
  },
  watch: {
    $route(to, from) {
      console.log("route change watched");
      this.loadPosts();
    }
  },
  prefetch: fetchInitialData,
  mounted() {
    this.loadPosts();
    let juicerScript = document.createElement("script");
    juicerScript.setAttribute("src", "https://assets.juicer.io/embed.js");
    document.head.appendChild(juicerScript);
  }
};
</script>

<style lang="scss">
.personal-card {
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
}
.personal-img {
  text-align: center;
  align-self: center;
  margin-bottom: 0;
}
.personal-desc {
  align-self: center;
}
.category-posts {
  flex-wrap: wrap;
}
.md-tab .juicer-feed {
  background-color: white !important;
}
.md-tab .juicer-feed.modern li.feed-item,
.juicer-feed.polaroid li.feed-item {
  padding: 10px;
  background: #006d5d;
  color: #ffffff;
}
.md-tab .j-poster h3,
.md-tab .j-poster .j-date {
  color: white;
}
.j-overlay .j-overlay-text .j-poster h3,
.j-overlay .j-overlay-text .j-poster .j-date {
  color: #3a3a3a !important;
}
.md-tab .juicer-feed.modern .j-message {
  color: white;
}
.md-tab .juicer-feed a,
.md-tab .juicer-feed .j-meta a {
  color: white !important;
}
.j-overlay .juicer-feed a,
.j-overlay .juicer-feed .j-meta a {
  color: #3a3a3a !important;
}
.j-post-overlay.juicer-feed a.juicer-button {
  border: 2px solid #3a3a3a !important;
  color:  #3a3a3a !important;
}
.md-tab .juicer-feed a.juicer-button {
    color: #003F2F !important;
}

.md-tab .juicer-feed .j-paginate {
  border: 2px solid #003F2F !important;
}

</style>
