import React from 'react';
import './CollectionsOverview.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

const CollectionsOverview = ({ collections }) => {
    return(
        <div className='collections-overview'>
        {
        collections.map( ({ id, ...otherCollectionProps}) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />
            })
        }  
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);