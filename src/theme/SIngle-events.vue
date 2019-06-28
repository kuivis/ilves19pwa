<template>
  <div>
      <h1>Tapahtuman tiedot</h1>
    <div v-if="(event && !event.content)">
      <h1>Loading...</h1>
      <div class="single-content card fake-single-content"></div>
    </div>
    <vwp-single-event :single="event"></vwp-single-event>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import VwpSingleEvent from "components/vwpSingleEvent.vue";
  const fetchInitialData = (store, route) => {
    console.log("single-events, params.slug: " + route.params.slug)
    return store.dispatch(`events/getEvent`, route.params);
  };
  export default {
    name: "SingleEvent",
    components: {
      "vwp-single-event": VwpSingleEvent
    },
    computed: {
      ...mapGetters(["routeParamId"]),
      ...mapGetters("events", ["event"])
    },
    methods: {
      ...mapActions("events", {
        getEvent: "getEvent"
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
