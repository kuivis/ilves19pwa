<template>
  <div class="vwp-single">
    <div v-if="!single || (single && !single.content)">
      <h1>Ladataan sivua...</h1>
    </div>
    <div v-if="single && single.content">
      <h1 v-html="single.title.rendered"></h1>
      <div class="single-content">
        <div v-html="single.content.rendered"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const fetchInitialData = (store, route) => {
  return store.dispatch(`page/getPage`, route.params.id);
};
export default {
  computed: {
    ...mapGetters("page", ["single"])
  },
  methods: {
    ...mapActions("page", {
      getPage: "getPage"
    }),
    loadData() {
      fetchInitialData(this.$store, this.$route);
    }
  },
  watch: {
    $route(to, from) {
      this.loadData();
    }
  },
  prefetch: fetchInitialData,
  mounted() {
    this.loadData();
  }
};
</script>

<style lang="scss">
@import "../variables";
.vwp-single h1 {
  font-family: "Rubik";
  font-weight: 700;
  color: $primary;
  font-size: 26px;
  text-transform: uppercase;
}
.vwp-single .single-content {
  background-color: $cardContentBackground;
  color: $white;
  padding: 20px;
  display: inline-block;
  width: 100%;
}

.vwp-single .single-content h1{
  color: $white;
}
.vwp-single .single-content a{
  color: $white;
  text-decoration: underline;
}

</style>
