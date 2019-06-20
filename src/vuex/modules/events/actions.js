import Vue from 'vue'

import wordpressService from '../../../app.service'


const getEvents = ({commit, state}, params) => {
  return new Promise((resolve, reject) => {
    wordpressService.getEvents(params.page, 6).then((events) => {
      params.events = events
      params.events.totalPages = events.totalPages
      console.log("actions, getEvents, params.event: " + params.event)
      resolve(params.event)
    }).catch(error => {
      reject(new Error(error))
    })
  })
}

const getEvent = ({ commit, state }, params) => {
  console.log("actions, getEvent")
  if (typeof window !== 'undefined' && state.event && state.event.slug !== params.page) {
    state.event = {}
  }

  return new Promise((resolve, reject) => {
    let eventId = state.events[0].id
    for (var i = 0; i < state.events.length; i++) {
      if (state.events[i].slug === params.page) {
        eventId = state.events[i].id
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
