<template>
  <div>
    <div class="md-layout md-gutter md-alignment-center">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="(event) in events.events"
        v-bind:key="event.id"
      >
        <vwp-event-card :post="event" :newFlag="newFlag"></vwp-event-card>
      </div>
    </div>

    <div v-if="!hidePagination">
      <vwp-paging
        v-if="events.totalPages > 0"
        :totalPages="events.totalPages"
        :path="'/tapahtumat'"
      ></vwp-paging>
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
