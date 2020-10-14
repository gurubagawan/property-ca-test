import React, { Component } from 'react'
import { connect } from 'react-redux'

import listingImage from '../images/real-estate.jpg'


@connect(state => ({
  listings: state.listings,
}))
export default class Listings extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          {this.props.listings.map(listing => {
            const { title, price, bedrooms, bathrooms } = listing
            return (
              <div className="listing-item">
                <img src={listingImage} alt="" />
                <h2>
                  {title}
                </h2>
                <p className="listing-price">
                  ${price}
                </p>

                <hr style={{ marginTop: 15 }} />

                <p style={{ marginBottom: 0 }}>
                  Beds {bedrooms}
                </p>
                <p style={{ marginBottom: 0 }}>
                  Baths {bathrooms}
                </p>
              </div>
            )
          })
          }
        </ul>
      </div>
    )
  }
}
