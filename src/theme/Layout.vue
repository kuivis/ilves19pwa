<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">ILVES19</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" >
        
        <md-toolbar class="md-transparent" md-elevation="0">Ilves19-sovellus</md-toolbar>
        <md-list>
          <md-list-item>
            <md-checkbox v-model="kaikki">Kaikki ikäkaudet</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="aikuiset">Aikuiset</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="vaeltajat">Vaeltajat</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="samoajat">Samoajat</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="tarpojat">Tarpojat</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="seikkailijat">Seikkailijat</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="sudenpennut">Sudenpennut</md-checkbox>
          </md-list-item>
        </md-list>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Valikko1</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Valikko2</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Valikko3</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Valikko4</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <section class="main-section section">
          <div class="container content">
            <router-view></router-view>
          </div>
        </section>

        <md-bottom-bar md-type="shift" md-theme="default" md-sync-router>
          
          <md-bottom-bar-item
            to="/page/mobiili"
            exact
            md-label="Etusivu"
            md-icon="/assets/baseline-local_post_office-24px.svg"
          ></md-bottom-bar-item>
          <md-bottom-bar-item to="/kategoria/uutiset" md-label="Uutiset" md-icon="weekend"></md-bottom-bar-item>
          <md-bottom-bar-item
            to="/tapahtumat/"
            md-label="Tapahtumat"
            md-icon="/assets/baseline-event-24px.svg"
          ></md-bottom-bar-item>
          <md-bottom-bar-item
            to="/kartta/"
            md-label="Kartta"
            md-icon="/assets/baseline-map-24px.svg"
          ></md-bottom-bar-item>
          <md-bottom-bar-item
            to="/page/leiri"
            md-label="Leiri"
            md-icon="/assets/campground-solid.svg"
          ></md-bottom-bar-item>
        </md-bottom-bar>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    menuVisible: false,
    kaikki: true,
    aikuiset: true,
    vaeltajat: false,
    samoajat: false,
    tarpojat: false,
    seikkailijat: false,
    sudenpennut: false
  }),
  mounted() {
        if (localStorage.getItem('ikaluokat')) {
          try {
              this.ikaluokat = JSON.parse(localStorage.getItem('ikaluokat'));
            } catch(e) {
              localStorage.removeItem('ikaluokat');
            }
        }
    }
};
</script>

<style lang="scss">

@import "../variables";


.md-app-container .md-toolbar .md-title {
  font-family: 'Rubik';
  font-weight: 700;
}

.md-card .md-card-header .md-title {
  font-family: 'Rubik';
  font-weight: 700;
}
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
  z-index: 100;
}
</style>
