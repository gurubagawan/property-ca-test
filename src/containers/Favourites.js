import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListingItem from '../components/ListingItem';

import listingImage from '../images/real-estate.jpg';

@connect((state) => ({
  favourites: state.favorites,
}))
export default class Favourites extends Component {
  render() {
    console.log(this.props);
    let sortedArray = this.props.favourites.sort((a, b) => {
      if (this.props.sortOrder === 'asc') {
        return a.price - b.price;
      } else if (this.props.sortOrder === 'des') {
        return b.price - a.price;
      }
    });
    console.log(this.props);
    if (sortedArray.length == 0) return null;
    return (
      <div className="container">
        <div className="row">
          {sortedArray.map((listing) => {
            const { title, price, bedrooms, bathrooms, favorite } = listing;
            return (
              <ListingItem
                title={title}
                price={price}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                listingImage={listingImage}
                favorite={favorite}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
