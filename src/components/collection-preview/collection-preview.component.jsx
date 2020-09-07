import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, name, imageUrl, price }) => (
          <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;