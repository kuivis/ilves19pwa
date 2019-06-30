<template>
  <div v-if="categories && categories.length > 0">
    <div v-for="category in categories" v-bind:key="category.id">
      <h2>
        <router-link :to="'/kategoria/' + category.slug + '/'">
          <span>{{ category.name }}</span>
        </router-link>
      </h2>
      <div
        class="columns category-posts"
        v-if="!category.posts || category.posts.length === 0"
      >
      </div>
      <div class="md-layout md-gutter md-alignment-center">
      
      <div
          class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
          v-for="(item) in category.posts"
          v-bind:key="item.id"
        >
          <vwp-post-card
            :post="item"
            :newFlag="newFlag"
            :categorySlug="category.slug"
          ></vwp-post-card>
        </div>
      </div>

      <div v-if="!hidePagination">
        <vwp-paging
          v-if="category.totalPages > 0"
          :totalPages="category.totalPages"
          :path="'/kategoria/' + category.slug"
        ></vwp-paging>
      </div>
      
    </div>
  </div>
</template>

<script>
  import VwpPostCard from "./vwpPostCard.vue";
  import VwpPaging from "./vwpPaging.vue";
  export default {
    name: "vwp-subcategory",
    components: {
      "vwp-post-card": VwpPostCard,
      "vwp-paging": VwpPaging
    },
    props: ["hidePagination", "newFlag", "categories"]
  };
</script>
