import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import {App} from './App'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
})

const bootstrap = [reactLifecycles.bootstrap]

const mount = [reactLifecycles.mount]

const unmount = [reactLifecycles.unmount]

function domElementGetter() {
  return document.getElementById('simulations')
}

export {bootstrap, mount, unmount}
