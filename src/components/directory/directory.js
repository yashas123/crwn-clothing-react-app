import React from "react";
import MenuItem from "../menu-item/menu-item";

import sections from "./directory.data";
import "./directory.scss";

export default function Directory() {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, size, id }) => (
        <MenuItem
          key={id}
          title={title}
          subtitle={"Shop Now"}
          imageUrl={imageUrl}
          size={size}
        />
      ))}
    </div>
  );
}
