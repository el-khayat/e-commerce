import React from "react";
import "./CollectionPreview.scss"
import Item from "../Item/Item";
import {useNavigate} from 'react-router-dom'



const CollectionPreview = ({title,items,routeName})=>{

const navigate = useNavigate();
    return (
<div className="collection">
  
   <h2 onClick={()=> navigate(routeName)}>  {title} </h2>
   
   <div className="items" > 

        {
            items.filter((item,idx)=> idx < 4 )
            .map((item)=>{
                return(
                    <Item key={item.id} item={item}/> 
                    )
                })
                
                
            }
    </div>
</div>
    )
}

export default CollectionPreview ;