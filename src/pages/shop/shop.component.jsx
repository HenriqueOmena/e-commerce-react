import React from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from '../../components/collection-preview/colletion-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map( ({id, ...restCollectionProps}) => (
                    <CollectionPreview key={id} {...restCollectionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;
