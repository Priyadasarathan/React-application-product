

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import './Product.css'

function Product() {
    const [product, setProduct] = useState([]);
    console.log(product,'product details');

    
    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products?limit=10')
        .then((response) => (response.json()))
        .then((json) => setProduct(json || []))
    }, [])
    
   
    function addToCart(id) {
        const cartProducts = product?.find(curr => curr.id === parseInt(id));
        const localcart = JSON.parse(localStorage.getItem('cart'));
        const updatecart = { ...cartProducts, quantity: 1, subtotal: cartProducts.price }

        if (localcart) {
            const index = localcart.findIndex(curr => curr.id === id);
            if (index != -1) {
                const iditem = localcart[index];
                const updatecart = { ...iditem, quantity: iditem.quantity + 1, subtotal: (iditem.price) * (iditem.quantity + 1) }
                localcart[index] = updatecart;
                localStorage.setItem('cart', JSON.stringify(localcart))

            } else {
                const cartitems = [...localcart, updatecart];
                localStorage.setItem('cart', JSON.stringify(cartitems));
            }
        } else {
            localStorage.setItem('cart', JSON.stringify([updatecart]));
        }
        toast('🦄 Your product add to cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <>
            <div className='product-content'>
                <h2>Customisable website Products</h2>
                <h6>Choose from our range of pre-built website templates. Our drag-and-drop editor allows you to easily edit your selected template to match your business and industry. All our website templates are responsive, meaning your website will look great, no matter what device your site visitors are using.</h6>
            </div>
            <div className='product-details'>
                {!!product?.length && product?.map(products =>
                    <div key={products.id} className='products'>
                        <h3>Product id: {products.id}</h3>
                        <img src={products.image} alt='product-image' />
                        <h4>{products.title}</h4>
                        <h5>Rs. {products.price}</h5>
                        <button onClick={() => addToCart(products.id)}>Buy Now</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Product