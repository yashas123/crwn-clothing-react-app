import React from "react";

import CollectionItem from '../collection-item/collection-item';

import "./collection-preview.scss";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherPorps}) => (
            <CollectionItem key={id} {...otherPorps}/>
          ))}
      </div>
    </div>
  );
}
