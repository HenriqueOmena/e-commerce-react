import React from 'react'

import CollectionItem from '../collection-item/collecion-item.component'

import './colletion-preview.style.scss'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map( ({ id, ...restProps }) => (
                        <CollectionItem key={id} {...restProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
