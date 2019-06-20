<template>
  <section>
      <h1>Tapahtumat</h1>
    <div class="clearfix"></div>
    <div class="columns category-posts" v-if="!events || events.length === 0">
      Ei tapahtumia =(
      <div class="column is-one-third"><div class="card fake-card"><div class="card-content">&nbsp;</div></div></div>
      <div class="column is-one-third"><div class="card fake-card"><div class="card-content">&nbsp;</div></div></div>
      <div class="column is-one-third"><div class="card fake-card"><div class="card-content">&nbsp;</div></div></div>
    </div>
    <vwp-events :events="events" ></vwp-events>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import VwpEvents from 'components/vwpEvents.vue'
const fetchInitialData = (store, route) => {
  route.params.page = route.params.page || 1
  console.log("category-events, fetchInitialData, page:" + route.params.page)
  return store.dispatch(`events/getEvents`, {page: route.params.page})
}

export default {
  name: 'ThemeEventCategory',
  components: {
    'vwp-events': VwpEvents
  },
  computed: {
    ...mapGetters('events',['event','events'])
  },
  methods: {
    loadEvents () {
      fetchInitialData(this.$store, this.$route)
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadEvents()
    }
  },
  prefetch: fetchInitialData,
  mounted () {
    this.loadEvents()
  }
}
</script>

<style lang="scss">
  .personal-card{
    display: flex;
    padding: 10px;
    margin-bottom: 20px;
  }
  .personal-img{
    text-align: center;
    align-self: center;
    margin-bottom:0;
  }
  .personal-desc{
    align-self: center;
  }
  .category-posts{
    flex-wrap:wrap;
  }
</style>
