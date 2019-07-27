<template>
  <div>

     <h1>Horisontti</h1>

<p>Ohessa Viesti tulevaisuudesta videot soittolistana, voit valita videon klikkaamalla oikean yläkulman soittolistaikonia (<md-icon>playlist_play</md-icon>)

    <div class="embed-container">
      <iframe src="https://www.youtube.com/embed/videoseries?list=PLz2_wTNUCWBcKbWBSF0vmNeaE7ZJQJ8Ik" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>


<script>
export default {
  name: "MediaPage",
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

