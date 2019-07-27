<template>
  <div>
    <div class="embed-container">
      <iframe src="https://www.youtube.com/embed/videoseries?list=PLz2_wTNUCWBcKbWBSF0vmNeaE7ZJQJ8Ik" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    </div>
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
    <br />Eventit:
    <br />

    {{ events }}
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
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

