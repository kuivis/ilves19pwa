<template>
  <div>
    <div class="md-layout md-gutter md-alignment-center">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="(event) in orderedEvents"
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

var orderBy = require('lodash.orderby');

export default {
  name: "vwp-events",
  components: {
    "vwp-event-card": VwpEventCard,
    "vwp-paging": VwpPaging
  },
  props: ["hidePagination", "newFlag", "events"],
  computed: {
    orderedEvents: function() {
      return orderBy(this.events, "cmb2.lippukuntateema_event_metabox.lippukuntateema_event_date_start");
    }
  }
};
</script>
