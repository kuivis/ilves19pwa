import Vue from 'vue'

import wordpressService from '../../../app.service'


const getEvents = ({commit, state}, params) => {
  return new Promise((resolve, reject) => {
    wordpressService.getEvents(params.page, 6).then((events) => {
      params.events.posts = events.posts
      params.events.totalPages = events.totalPages
      resolve(params.event)
    }).catch(error => {
      reject(new Error(error))
    })
  })
}

const getEvent = ({ commit, state }, params) => {
  if (typeof window !== 'undefined' && state.single && state.single.slug !== params.page) {
    state.single = {}
  }

  return new Promise((resolve, reject) => {
    let postId = state.posts[0].id
    for (var i = 0; i < state.posts.length; i++) {
      if (state.posts[i].slug === params.page) {
        postId = state.posts[i].id
        break
      }
    }
    wordpressService.getEvent(postId).then((postData) => {
      state.single = postData
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
