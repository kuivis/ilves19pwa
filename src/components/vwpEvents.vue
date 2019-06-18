<template>
      <div
        class="columns category-posts"
        v-if="!events || events.length === 0"
      >
        <div class="column is-one-third">
          <div class="card fake-card">
            <div class="card-content">&nbsp;</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card fake-card">
            <div class="card-content">&nbsp;</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card fake-card">
            <div class="card-content">&nbsp;</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card fake-card">
            <div class="card-content">&nbsp;</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card fake-card">
            <div class="card-content">&nbsp;</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card fake-card">
            <div class="card-content">&nbsp;</div>
          </div>
        </div>
      <div class="columns category-posts category-posts-loaded">
        <div
          class="column is-one-third"
          v-for="(event) in events"
          v-bind:key="event.id"
        >
          <vwp-post-card
            :post="event"
            :newFlag="newFlag"
            :categorySlug="event.slug"
          ></vwp-post-card>
        </div>
      </div>
      <div v-if="!hidePagination">
        <div class="columns"><div class="column"></div></div>
        <vwp-paging
          v-if="events.totalPages > 0"
          :totalPages="events.totalPages"
          :path="'/tapahtumat/' + event.slug"
        ></vwp-paging>
      </div>
      <div class="columns"><div class="column"></div></div>
    </div>
</template>

<script>
  import VwpPostCard from "./vwpPostCard.vue";
  import VwpPaging from "./vwpPaging.vue";
  export default {
    name: "vwp-events",
    components: {
      "vwp-post-card": VwpPostCard,
      "vwp-paging": VwpPaging
    },
    props: ["hidePagination", "newFlag", "events"]
  };
</script>
