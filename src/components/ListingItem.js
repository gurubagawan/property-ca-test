import React from 'react';
import { addToFavoriteFunction } from '../actions';
import starImage from '../images/star.png';

// addToFavoriteFunction

const ListingItem = ({
  title,
  price,
  bedrooms,
  bathrooms,
  listingImage,
  index,
  favorite,
}) => {
  return (
    <div className="col-md-3 less-padding col-sm-6 col-xs-12">
      <div className="listing-item">
        {favorite && (
          <img
            src={starImage}
            style={{
              height: 40,
              width: 'auto',
              position: 'absolute',
              right: 10,
              top: 20,
            }}
            alt=""
          />
        )}
        <img
          src={listingImage}
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="listing-text">
          <p className="listing-price">${price}</p>
          <h2>{title}</h2>
          <p style={{ marginBottom: 0, color: '#263238' }}>
            {bedrooms} BD | {bathrooms} BA
          </p>
        </div>
      </div>
      <button onClick={() => addToFavoriteFunction(index)}>click</button>
    </div>
  );
};

export default ListingItem;
