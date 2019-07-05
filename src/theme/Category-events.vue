<template>
  <section>
    <h1>Tapahtumat</h1>
    <div class="clearfix"></div>
    <div
      class="columns category-posts"
      v-if="!events.events || events.events.length === 0"
    >Ladataan tapahtumia...</div>
    <vwp-events :events="events"></vwp-events>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import VwpEvents from "components/vwpEvents.vue";
const fetchInitialData = (store, route) => {
  route.params.page = route.params.page || 1;
  console.log("category-events, fetchInitialData, page:" + route.params.page);
  return store.dispatch(`events/getEvents`, { page: route.params.page });
};

export default {
  name: "ThemeEventCategory",
  components: {
    "vwp-events": VwpEvents
  },
  computed: {
    ...mapGetters("events", ["events"])
  },
  methods: {
    loadEvents() {
      fetchInitialData(this.$store, this.$route);
    }
  },
  watch: {
    $route(to, from) {
      console.log("route change watched");
      this.loadEvents();
    }
  },
  prefetch: fetchInitialData,
  mounted() {
    this.loadEvents();
  }
};
</script>

<style lang="scss">
@import "../variables";

section > h1 {
  font-family: "Rubik";
  font-weight: 700;
  color: $primary;
  font-size: 26px;
  text-transform: uppercase;
}

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
</style>
