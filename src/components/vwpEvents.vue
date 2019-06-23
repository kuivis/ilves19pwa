<template>
<div>
  <div class="columns category-posts" v-if="!events.events || events.events.length === 0">
    {{events}}
  </div>
    <div class="columns category-posts category-posts-loaded">
      <div class="column is-one-third" v-for="(event) in events.events" v-bind:key="event.id">
        <vwp-event-card :post="event" :newFlag="newFlag"></vwp-event-card>
      </div>
    </div>
    <div v-if="!hidePagination">
      <div class="columns">
        <div class="column"></div>
      </div>
      <vwp-paging
        v-if="events.totalPages > 0"
        :totalPages="events.totalPages"
        :path="'/tapahtumat/'"
      ></vwp-paging>
    </div>
    <div class="columns">
      <div class="column"></div>
    </div>
  </div>

</template>

<script>
import VwpEventCard from "./vwpEventCard.vue";
import VwpPaging from "./vwpPaging.vue";
export default {
  name: "vwp-events",
  components: {
    "vwp-event-card": VwpEventCard,
    "vwp-paging": VwpPaging
  },
  props: ["hidePagination", "newFlag", "events"]
};
</script>
