import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size,url }) =>{
  const navigate = useNavigate();

  return(

  
    <div className={`${size} menu-item`} onClick={()=> navigate(url)}  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      />
    <div className='content'>

      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>

    </div>
  </div>
  



);
} 

export default MenuItem;