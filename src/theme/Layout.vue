<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">ILVES19</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <strong>Leiriapin asetukset</strong>
        </md-toolbar>
        <md-divider></md-divider>

        <md-list :md-expand-single="true">
          <md-list-item md-expand>
            <span class="md-list-item-text">Valitse ikäkaudet</span>
            <md-list slot="md-expand">
              <md-list-item>
                <md-checkbox class="md-primary" v-model="checkAllIkakaudet">Kaikki</md-checkbox>
              </md-list-item>
              <md-list-item
                v-for="item in ikakaudet"
                :key="item.id"
                :label="item.label"
                :checked="item.checked"
              >
                <md-checkbox class="md-primary"  value="item.checked">{{ item.label }}</md-checkbox>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-divider></md-divider>
          <md-list-item md-expand>
            <span class="md-list-item-text">Valitse alaleiri</span>
            <md-list slot="md-expand">
              <md-list-item>
                <md-checkbox v-model="alaleirit">Kaikki alaleirit</md-checkbox>
              </md-list-item>
              <md-list-item>
                <md-checkbox v-model="alaleirit.eksa">Eksa</md-checkbox>
              </md-list-item>
              <md-list-item>
                <md-checkbox v-model="alaleirit.nano">Nano</md-checkbox>
              </md-list-item>
              <md-list-item>
                <md-checkbox v-model="alaleirit.jotta">Jotta</md-checkbox>
              </md-list-item>
              <md-list-item>
                <md-checkbox v-model="alaleirit.tera">Tera</md-checkbox>
              </md-list-item>
              <md-list-item>
                <md-checkbox v-model="alaleirit.tsetta">Tsetta</md-checkbox>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-divider></md-divider>
          <md-list-item>
            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Tietoa leiriapista</span>
            </md-list-item>
          </md-list-item>
        </md-list>
        You have checked: {{valitutIkakaudet}}
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
          <md-bottom-bar-item to="/info" md-label="Leiri" md-icon="/assets/campground-solid.svg"></md-bottom-bar-item>
        </md-bottom-bar>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    menuVisible: false
  }),
  computed: {
    ...mapState(["ikakaudet", "alaleirit"])
  },
  methods: {
    ...mapActions(["updateIkakaudet", "updateAlaleirit"])
  }
};
</script>

<style lang="scss">
@import "../variables";

div.md-content {
  background-image: url("/assets/leiriappi_bg_harmaa.png");
  background-repeat: repeat-y;
  background-size: contain;
}
.md-app-container .md-toolbar .md-title {
  font-family: "Rubik";
  font-weight: 700;
}

.md-toolbar h1 {
  font-family: "Rubik";
  font-weight: 700;
}

.md-card .md-card-header .md-title {
  font-family: "Rubik";
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
