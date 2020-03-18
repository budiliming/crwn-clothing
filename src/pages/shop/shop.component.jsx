import React from 'react';
import { createStructuredSelector } from 'reselect';

//import CollectionsOverview from '../../components/collection-overwiew/collection-overview.component';
import collectionOverviewContainer from '../../components/collection-overwiew/collection-overview.container';
import { Route } from 'react-router-dom';
//import CollectionPage from '../collection/collection.component';
import CollectionPageContainer from '../collection/collections.container';

//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
//import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

//import WithSpinner from '../../components/with-spinner/with-spinner.component';

// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections : SHOP_DATA           
//         }
//     }

//     render() {
//         const {collections} = this.state;
//         return (<div className='shop-page'>
//             {
//                 collections.map(({ id, ...otherCollectionProps }) => (
//                     <CollectionPreview key={id} {...otherCollectionProps} />
//                 ))
//             }
//         </div>)
//     }
// }

// const ShopPage = ({ match }) => (
//     <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
//     </div>
// );

//const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    // state = {
    //     loading: true
    // };

    // unSubscribeFromSnapshot = null;

    componentDidMount() {
        // const { updateCollections } = this.props;

        // const collectionRef = firestore.collection('collections');
        // // collectionRef.onSnapshot(async snapshot => {
        // //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // //     updateCollections(collectionsMap);
        // // });
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;
        // const { match, isCollectionsLoaded } = this.props;
        //const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
        //const { loading } = this.state;

        return (
            <div className='shop-page'>
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} /> */}

                {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} /> */}
                <Route exact path={`${match.path}`} component={collectionOverviewContainer}/>
                {/* <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} /> */}
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
            </div>  
        )
    }
};

//const mapStateToProps = createStructuredSelector({
    // isCollectionFetching: selectIsCollectionFetching,
    //isCollectionsLoaded: selectIsCollectionsLoaded
//});

const mapDispatchToProps = dispatch => ({
    //updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);