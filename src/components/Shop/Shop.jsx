import React from "react";
import './Shop.scss';
import CollectionOverview from "../collection-overview/collection-overview";
import { Outlet} from "react-router-dom";
import { useParams } from "react-router-dom";

const Shop = ()=>{

  const params = useParams()


  const OverviewMode = true ;
    return (
  <div className="shop-page"> 
  {
    !params.CategoryId ?
<CollectionOverview />
    :
    <Outlet/>
  }
  </div>

    );
} 

export default Shop ;