import React from 'react'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { connect } from "react-redux";

const CollectionOverview = ({collections}) => {
  return (
    <div className='collection-overview'>
           {
    collections.map(({id,...otherCollectionProps})=>{
      return <CollectionPreview key={id} {...otherCollectionProps} />
    })
   } 
        


    </div>




  )
}
  
const mapStateToProps = state =>({
    collections : state.shop.collections
  })
  export default connect(mapStateToProps)(CollectionOverview) ;