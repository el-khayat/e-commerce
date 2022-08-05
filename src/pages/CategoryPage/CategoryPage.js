import React from 'react'
import "./CategoryPage.scss"
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Item from '../../components/Item/Item';


const CategoryPage = ( ) => {
  
  const params = useParams()
  const categoryItem = useSelector(state=> state.shop.collections.find(item => item.title.toLowerCase() === params.CategoryId) )
  const {title,items}= categoryItem ;
    console.log("items",categoryItem);
    console.log("params",params);
  

  return (
    <div className="collection">
  
   <h2 >  {title} </h2>
   
   <div className="items" > 

        {
            items
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


export default CategoryPage