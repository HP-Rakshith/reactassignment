function ProductList({filterproduct}){
    return(
        <>
        <ul>
        {
           filterproduct.map(product=> (
            <li key={product.id}>{product.name}</li>
                )
            )
        }
        </ul>
        </>
    )
};

export default ProductList;