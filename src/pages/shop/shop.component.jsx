import React from 'react';

import CollectionsOverview from '../../components/collection-overwiew/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

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

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
);

export default ShopPage;