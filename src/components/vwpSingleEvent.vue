<template>
  <div class="vwp-single">
    <div v-if="single && single.content">
      
      <div class="single-content card">
        <h1 v-html="single.title.rendered"></h1>
        <div
          class="is-pulled-left"
          v-if="single.tags && single.tags.length > 0"
        >
          <i class="icon-tags" aria-hidden="true"></i>
          <span
            class="tag"
            v-for="tag in single.pure_taxonomies.tags"
            v-bind:key="tag.id"
          >
            {{ tag.name }}
          </span>
        </div>
        <div class="is-pulled-right single-date">
        <small>Tapahtumapaikka: {{ single.cmb2.lippukuntateema_event_metabox.lippukuntateema_event_location }}</small>
        <br />
        <small>Alkamisaika: {{ single.cmb2.lippukuntateema_event_metabox.lippukuntateema_event_date_start | formatDate }}</small>
        <br />
        <small>Päättymisaika: {{ single.cmb2.lippukuntateema_event_metabox.lippukuntateema_event_date_end | formatDate }}</small>
        <br />
        <small>ikäkaudet: {{ this.haeNimiLista(single.ikakausi) }}</small><br/>
        <small>alaleirit: {{ this.haeNimiLista(single.alaleiri) }}</small>
        </div>
        <div class="is-clearfix"></div>
        <div class="card-content">
          <div v-html="single.content.rendered"></div>
          <p class="is-clearfix"></p>
          <div v-if="single.rest_api_enabler && single.rest_api_enabler.Link">
            <a :href="single.rest_api_enabler.Link" target="_blank">{{
              single.rest_api_enabler.Link
            }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="is-clearfix"></div>
  </div>
</template>

<script>
  export default {
    props: ["single", "hideBack"]
  };
</script>

<style lang="scss">
  @import "../_variables";
  .vwp-single {
    pre {
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }
    .single-content {
      background-color: $white;
      padding: 20px;
      display: inline-block;
      width: 100%;
    }
    .single-back {
      margin-right: 1rem;
    }
    .single-date {
      font-style: italic;
      font-size: $size-7;
    }
  }
</style>
