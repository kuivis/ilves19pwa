<template>
  <div>
    Ikäkaudet:
    <br />
    {{ ikakaudet }}
    <br />
    {{ haeValitut(ikakaudet)}}
    <br />
    <br />Alaleirit:
    <br />
    {{ alaleirit }}
    <br />
    {{ haeValitut(alaleirit)}}
    <br />

  </div>
</template>


<script>
import { mapGetters, mapState } from "vuex";


export default {
  name: "DebugPage",
  computed: {
    ...mapGetters("events", ["events"]),
    ...mapState("settings", ["ikakaudet", "alaleirit"])
  }
};


</script>


<style lang="scss">
</style>

