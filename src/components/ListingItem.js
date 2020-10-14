import React from 'react';

const ListingItem = ({ title, price, bedrooms, bathrooms, listingImage }) => {
  // console.log(typeof price);
  return (
    <div className="col-md-3 less-padding col-sm-6 col-xs-12">
      <div className="listing-item">
        <img
          src={listingImage}
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="listing-text">
          <p className="listing-price">${price}</p>
          <h2>{title}</h2>
          <p style={{ marginBottom: 0 }}>
            {bedrooms} BD | {bathrooms} BA
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
