<template>
  <div id="game">
    <canvas id="gamecanvas" ref="flappy" width="288" height="512"></canvas>
  </div>
</template>

<script>
import FlappyBind from '../utils/FlappyBird'

export default {
  name: 'HiddenGame',
  mounted() {
    const cvs = this.$refs.flappy
    const ctx = cvs.getContext('2d')

    const flappy = new FlappyBind(ctx, cvs)

    setTimeout(() => {
      flappy.draw()
    }, 0)

    document.addEventListener('touchstart', (e) => {
      flappy.fly()

      e.preventDefault()
    })

    document.addEventListener('keydown', (e) => {
      flappy.fly()

      e.preventDefault()
    })
  }
}
</script>

<style lang="scss">

#game {
  width: 100vw;
  height: calc(100vh - 104px);
  margin: -16px;
  overflow: hidden;
}

#gamecanvas {
  display: block;
  
  width: 100vw;
}

</style>
