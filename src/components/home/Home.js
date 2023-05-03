import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../apiService/Api';
import "./Home.css"

function Home() {
    const[products,setProducts]= useState([]);

   useEffect(()=>{
     const FetchProducts = async () =>{
      const data = await getAllProducts();
      setProducts(data);
     }
     FetchProducts();
   },[])

  return (
    <div className="prdtgrid">
        {
            products.map((item) =>(
             <div className="product" key={item.id}>
        <img src={item.image} alt="img" />
        <h4>{item.title}</h4>
        <div className="sale">
        <p> Rs.{item.price}</p>
                   </div>
        <button className='apibtn'>Product details</button>
        </div>
              )  ) 
        }
      
    </div>
  )
}

export default Home