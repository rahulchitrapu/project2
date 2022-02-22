import React, { useEffect, useState } from 'react';
import "./Card.css";

function Card({product}) {

   const[ishover,setIsHover]=useState(false);
   const [count,setCount]=useState(0)
   const [realCount,setRealCount]=useState(0);
   const [active,setActive]=useState(false)
   const counterFunc=(bool)=>{
       if(bool===false){
           setActive(true)
           
       }
       else{
           setActive(false)
           
       }

   }
    useEffect(()=>{
        
       
    },[count])
   
    return (
        <div className={`card ${ishover?"active":""}`}  onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}  >
            <div className='image-container'>
                <img className={`image`} src={product.image} alt="ashds"/>
                {ishover && <div className={`view-detail ${ishover?"active":""}`}>VIEW DETAIL</div>}
                <div  className='heart'>♡</div>
            </div>
            
            <div className='text-center'>
                <h4 className='name'>{product.name}</h4>
                {((product.price-product.selling_price)>0)?<p><del>{`Rs.${product.price}`}</del>
                <ins className='Price'>Rs. {<span className='price-rate'><b>{product.selling_price}</b></span>}</ins><span className='discount'><b>{`${product.discount}%`}</b></span></p>:<p className='Price'>Rs. {<span className='price-rate'><b>{product.selling_price}</b></span>}</p>}
                {ishover && <p className='size'>Size-{product.size}</p>}
            </div>
            
        </div>
    );
}

export default Card;