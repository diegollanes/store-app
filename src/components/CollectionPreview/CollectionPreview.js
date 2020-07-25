import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
            { items
                .filter((item, i) => i < 4)
                .map(item => {
               return <CollectionItem key={item.id} 
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}               
               />
                })
            }
            </div>
        </div>
    )
}

export default CollectionPreview