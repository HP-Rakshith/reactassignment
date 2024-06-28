import { useState } from "react";
import ProductList from "./ProductList";

const mockProducts = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' },
    { id: 5, name: 'Product E' },
  ];

  function dashboard(){
    const [product,filterProduct] = useState(mockProducts)

    const handlefilter=(event)=>{
        let value = event.target.value;
        const productlist= mockProducts.filter(product=> product.name.toLowerCase().includes(value.toLowerCase()));
        filterProduct(productlist);
    };

    return(
        <>
        <h1>Dashboard</h1>
        <input type="text" placeholder="search" onChange={handlefilter} />
        <ProductList product={filterProduct}/>
        </>
    )
  }

  