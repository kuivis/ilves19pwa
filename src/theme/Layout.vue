<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <section class="main-section section">
          <div class="container content">
            <router-view></router-view>
          </div>
       </section>

      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/page/mobiili" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/kategoria/uutiset" md-label="Posts" md-icon="weekend"></md-bottom-bar-item>
        <md-bottom-bar-item to="/kategoria/blogit" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>

      </md-app-content>

    </md-app>
  </div>
</template>

<script>


export default {
  name: 'app',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss">

$footerHeight: 56px;

.md-app {
  height: 100vh;
}

.md-app-scroller .md-app-content {
  padding: 0;
}

.main-section .content {
  padding: 16px;
  margin-bottom: $footerHeight;
}

.md-bottom-bar {
  position: absolute;
  top: 100vh;
  margin-top: $footerHeight * (-1);

}

</style>
