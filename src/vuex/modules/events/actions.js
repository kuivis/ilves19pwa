import Vue from 'vue'

import wordpressService from '../../../app.service'


const getEvents = ({commit, state}, params) => {
  return new Promise((resolve, reject) => {
    wordpressService.getEvents(params.page, 6).then((events) => {
      state.events = events
      state.events.totalPages = events.totalPages
      console.log("actions, getEvents, page: " + params.page)
      resolve()
    }).catch(error => {
      reject(new Error(error))
    })
  })
}

const getEvent = ({ commit, state }, params) => {
  console.log("actions, getEvent: " + params.id)
  if (typeof window !== 'undefined' && state.event && state.event.slug !== params.id) {
    state.event = {}
  }

  return new Promise((resolve, reject) => {
    let eventId = state.events.events[0].id
    for (var i = 0; i < state.events.events.length; i++) {
      if (state.events.events[i].slug === params.id) {
        eventId = state.events.events[i].id
        break
      }
    }
    wordpressService.getEvent(eventId).then((postData) => {
      state.event = postData

      resolve()
    }).catch(error => {
      reject(new Error(error))
    })
  })
}

export {
  getEvents,
  getEvent
}
