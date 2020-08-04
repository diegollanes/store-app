import { connect } from 'react-redux';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';
import CollectionPage from '../CollectionPage/CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;