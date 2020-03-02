import React from "react";
import { withRouter } from "react-router-dom";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import SHOP_DATA from "./shop.data";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default withRouter(Shop);
