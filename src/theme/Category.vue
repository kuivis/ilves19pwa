<template>
  <section>
    <div class="clearfix"></div>
    <div class="columns category-posts" v-if="!categories || categories.length === 0">
      Ei kategorioita
      <div class="column is-one-third"><div class="card fake-card"><div class="card-content">&nbsp;</div></div></div>
      <div class="column is-one-third"><div class="card fake-card"><div class="card-content">&nbsp;</div></div></div>
      <div class="column is-one-third"><div class="card fake-card"><div class="card-content">&nbsp;</div></div></div>
    </div>
    <vwp-subcategory :categories="categories" ></vwp-subcategory>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VwpSubcategory from 'components/vwpSubcategory.vue'
const fetchInitialData = (store, route) => {
  route.params.page = route.params.page || 1
  console.log("category, fetchInitialData, page:" + route.params.page)
  return store.dispatch(`category/getCategory`, {categorySlug: route.params.id, page: route.params.page})
}
export default {
  name: 'ThemePageCategory',
  components: {
    'vwp-subcategory': VwpSubcategory
  },
  computed: {
    ...mapGetters('category', [
      'categories'
    ])
  },
  methods: {
    loadPosts () {
      fetchInitialData(this.$store, this.$route)
    }
  },
  watch: {
    '$route' (to, from) {
      console.log("route change watched")
      this.loadPosts()
    }
  },
  prefetch: fetchInitialData,
  mounted () {
    this.loadPosts()
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
