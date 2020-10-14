import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import Application from './src/containers/Application'
import Listings from './src/containers/Listings'
import Favourite from './src/containers/Favourites'

import favourites from './src/reducers/favourites'
import listings from './src/reducers/listings'

import './index.scss'

const store = createStore(combineReducers({ favourites, listings }))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRedirect to="/listings" />
        <Route path="listings" component={Listings} />
        <Route path="favourites" component={Favourite} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
