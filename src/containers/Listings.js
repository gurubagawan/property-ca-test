import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListingItem from '../components/ListingItem';

import listingImage from '../images/real-estate.jpg';

@connect((state) => ({
  listings: state.listings,
}))
export default class Listings extends Component {
  render() {
    let sortedArray = this.props.listings.sort((a, b) => {
      if (this.props.sortOrder === 'asc') {
        return a.price - b.price;
      } else if (this.props.sortOrder === 'des') {
        return b.price - a.price;
      }
    });
    console.log(this.props.listings);
    return (
      <div className="container">
        <div className="row">
          {sortedArray.map((listing, i) => {
            const { title, price, bedrooms, bathrooms, favorite } = listing;
            return (
              <ListingItem
                key={i}
                index={i}
                title={title}
                price={price}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                favorite={favorite}
                listingImage={listingImage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
