import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _660902df = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _df913458 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _76ed9d14 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4b217894 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _ab64aad0 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _08ad5fe5 = () => interopDefault(import('..\\pages\\create\\article' /* webpackChunkName: "" */))
const _eb1c16c4 = () => interopDefault(import('..\\pages\\create\\editor' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _660902df,
    children: [{
      path: "",
      component: _df913458,
      name: "home"
    }, {
      path: "/login",
      component: _76ed9d14,
      name: "login"
    }, {
      path: "/register",
      component: _76ed9d14,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4b217894,
      name: "profile"
    }, {
      path: "/settings",
      component: _ab64aad0,
      name: "settings"
    }, {
      path: "/article/:slug",
      component: _08ad5fe5,
      name: "article"
    }, {
      path: "/editor",
      component: _eb1c16c4,
      name: "editor"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
