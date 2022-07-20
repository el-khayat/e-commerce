import React from "react";
import './Shop.scss';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import {SHOP_DATA} from '../../data';

const Shop = ()=>{

const collections = SHOP_DATA
    return (
  <div> 
   {
    collections.map(({id,...otherCollectionProps})=>{
      return <CollectionPreview key={id} {...otherCollectionProps} />
    })
   } 
     </div>

    );
} 
export default Shop ;