<template>
  <div id="map"></div>
</template>


<script>
import gmapsInit from '../utils/gmaps.js';

export default {
  name: "MapCarnivalPage",
  async mounted() {
    try {
      const google = await gmapsInit();
      var evo = {lat: 61.205, lng: 25.122};
      var map = new google.maps.Map(this.$el,{
        zoom:15, 
        center: evo,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false
      } );

      var kmzLayer = new google.maps.KmlLayer('https://www.ilves19.fi/wp-content/uploads/ilves-karnevaalit-2.kmz');
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
  height: calc(100vh - 104px);
  margin: -16px;
  overflow: hidden;
}

</style>
