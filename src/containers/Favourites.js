import React, { Component } from 'react'
import { connect } from 'react-redux'


@connect(state => ({
  favourites: state.points,
}))
export default class Favourites extends Component {
  render() {
    return (
      <div className="container">
      </div>
    )
  }
}
