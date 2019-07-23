<template>
  <section>
    <md-tabs>
      <md-tab id="tab-home" md-label="Yhteiset" exact>
        <h1>Yhteistapahtumat</h1>
        <div class="clearfix"></div>
        <div
          class="columns category-posts"
          v-if="!events.events || events.events.length === 0"
        >Ladataan tapahtumia...</div>
        <vwp-events :events="events.events.filter(e => e.ikakausi.includes(244))"></vwp-events>
      </md-tab>

      <md-tab id="tab-pages" md-label="Omat tapahtumat">
        <h1>Omat tapahtumat</h1>
        <div v-if="haeValitut(ikakaudet).length === 0">
          Et ole valinnut ikäkausia tai alaleirejä, jonka tapahtumia haluat nähdä.
          Voit valita ikäkaudet ja alaleirit vasemman yläkulman valikko-painikkeen takaa (
          <md-icon>menu</md-icon>)
        </div>
        <div class="clearfix"></div>
        <div
          class="columns category-posts"
          v-if="!events.events || events.events.length === 0"
        >Ladataan tapahtumia...</div>
        <vwp-events :events="events.events.filter( e => filterEvents(e))"></vwp-events>
      </md-tab>
    </md-tabs>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
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
    ...mapGetters("events", ["events"]),
    ...mapState("settings", ["ikakaudet", "alaleirit"])
  },
  methods: {
    loadEvents() {
      fetchInitialData(this.$store, this.$route);
    },
    haeValitut: function(asetukset) {
      //console.log(asetukset)
      let valitut = [];
      asetukset.forEach(element => {
        if (element.checked == true) {
          valitut.push(element.id);
        }
      });
      //console.log("valitut: " + valitut);
      return valitut;
    },
    filterEvents: function(e) {
      let ikakausiMatch = this.containsOne(this.haeValitut(this.ikakaudet), e.ikakausi);
      // if (ikakausiMatch) {
      //   console.log("ikakausiMatch");
      // }
      let alaleiriMatch = this.containsOne(this.haeValitut(this.alaleirit), e.alaleiri);
      // if (alaleiriMatch) {
      //   console.log("alaleiriMatch");
      // }
      let kaikilleAlaleireille = e.alaleiri.includes(236);
      let finalMatch = ikakausiMatch && (alaleiriMatch || kaikilleAlaleireille);

      return finalMatch;
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
