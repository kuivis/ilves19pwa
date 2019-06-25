<template>
  <div id="map"></div>
</template>


<script>
import gmapsInit from '../utils/gmaps.js';

export default {
  name: "MapPage",
  async mounted() {
    try {
      const google = await gmapsInit();;
      var evo = {lat: 61.205, lng: 25.122};
      var map = new google.maps.Map(this.$el,{zoom:16, center: evo} );

      var kmzLayer = new google.maps.KmlLayer('/assets/ilves19.kmz');
      kmzLayer.setMap(map);


    } catch (error) {
      console.error(error);
    }
  },
};

</script>

<style lang="scss">

#map {
  width: 100vw;
  height: 100vh;
}
.main-section .content {
    padding: 0;
    margin-bottom: 0
}
</style>
