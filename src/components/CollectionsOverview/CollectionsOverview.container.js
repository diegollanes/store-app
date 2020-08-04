import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

 const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
 
 export default CollectionsOverviewContainer;