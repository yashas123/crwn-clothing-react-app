import React from "react";
import './menu-item.scss';

export default function MenuItem(props) {
  return (
    <div className={`${props.size} menu-item`}>
			<div className='bg-img' style={{backgroundImage: `url(${props.imageUrl})`}} />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
}
