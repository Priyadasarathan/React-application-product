import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


import './Cart.css'
import { toast } from 'react-toastify';

function Cart() {
    const [cartitems, setCartitems] = useState([]);
    const [deleted, setDeleted] = useState();

    const [total, setTotal] = useState(0);
    // const totalamount = quantity;
    function getCartitems() {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        // const matchid = items.map((curr, idx)=>{
        //     // if (!map[curr.id]){
        //     //     map[curr.id]=[];
        //     // }
        //     // map[product.id].push(product);
        //     // return map
        // })
        setCartitems(items)
    }
    useEffect(() => {
        getCartitems()
    }, [deleted])
    // function uniqueId(){
    //     const local = JSON.parse(localStorage.getItem('cart'))
    //     const matchid = local.reduce((map, product) => {
    //         if(!map[product.id]){
    //             map[product.id]=[];
    //         }
    //         map[product.id].push(product);
    //         return map;
    //     },{});return matchid;

    // }
    // useEffect(()=>{
    //     uniqueId()
    // },[])
    // const idMap = products.reduce((map, product) => {
    //     if (!map[product.id]) {
    //         map[product.id] = [];
    //     }
    //     map[product.id].push(product);
    //     return map;
    // }, {});

    // console.log(idMap);

    function decreaseCart(id) {
        // const filteritem = cartitems?.find(curr => curr.id === id)
        const localcart = JSON.parse(localStorage.getItem('cart'))
        const iditemindex = localcart.findIndex(curr => curr.id === id)
        if (iditemindex !== -1) {
            const iditem = localcart[iditemindex];
            const updatecart = { ...iditem, quantity: iditem.quantity - 1, subtotal: (iditem.price) * (iditem.quantity - 1) }
            localcart[iditemindex] = updatecart;
            localStorage.setItem('cart', JSON.stringify(localcart))
        }

        setCartitems(prev => {
            // Find the item with the given id
            const updatedList = prev.map(item => {
                if (item.id === id) {
                    if (item.quantity >= 2) {
                        return { ...item, quantity: item.quantity - 1, subtotal: (item.price) * (item.quantity - 1) }; // Incrementing quantity by 1
                    } else {
                        return item;
                    }
                }
                return item;
            });
            return updatedList;
        });


    }

    function increaseCart(id) {
        const localcart = JSON.parse(localStorage.getItem('cart'));
        const iditemIndex = localcart.findIndex(curr => curr.id === id);

        if (iditemIndex !== -1) {
            const iditem = localcart[iditemIndex];
            const updatecart = { ...iditem, quantity: iditem.quantity + 1, subtotal: iditem.price * (iditem.quantity + 1) }
            localcart[iditemIndex] = updatecart;
            localStorage.setItem('cart', JSON.stringify(localcart));
        }
        setCartitems(prev => {
            // Find the item with the given id
            const updatedList = prev.map(item => {
                if (item.id === id) {
                    // Update the quantity of the item
                    return { ...item, quantity: item.quantity + 1, subtotal: item.price * (item.quantity + 1) }; // Incrementing quantity by 1
                }
                return item; // Return unchanged item if id doesn't match
            });


            return updatedList;
        });

    }


    const updateTotal = () => {
        const sum = cartitems?.reduce((accumulator, currentValue) => {
            return accumulator + currentValue?.subtotal;
        }, 0);
        setTotal(Number(sum).toFixed(3));
    };

    useEffect(() => {
        if (cartitems)
            updateTotal()
    }, [updateTotal, cartitems])

    function checkout() {
        localStorage.clear();
        getCartitems()
    }
    function deleteCart(id) {
        // alert('Are you sure want to delete')
        const confirmation = window.confirm('Are you sure you want to delete this item?');
        //confirmation for deleting the cart item
        if (!confirmation) return; {
            const localcart = JSON.parse(localStorage.getItem('cart'))
            if (localcart) {
                const check = localcart.filter(cart => cart.id !== id)
                localStorage.setItem('cart', JSON.stringify(check))
                setDeleted(check)
                //Toaster
                toast("🦄 Your product delete from the cart!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                console.log('no cart item');
            }
        }
    }

    return (
        <>
            <div className='cart-content'>
                <h2>Simple Fixed Pricing</h2>
                <h6>Getting a professional website has never been easier. Whether you want to build your own website, transfer from another platform, or need a website created for you, we can help.</h6>
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Delete</th>

                        </tr>

                    </thead>
                    <tbody>
                        {!!cartitems?.length && cartitems?.map((cartitem, idx) =>
                            <tr key={idx}>
                                <td><img src={cartitem?.image} /> {cartitem?.title}
                                    "{cartitem?.category}"</td>
                                <td>Rs. {cartitem?.price}</td>
                                <td>
                                    <div className='quantity'>
                                        <button onClick={() => decreaseCart(cartitem?.id)}>-</button>
                                        <input value={cartitem?.quantity} readOnly />
                                        <button onClick={() => increaseCart(cartitem?.id)}>+</button>
                                        {/* <button onClick={() => removeCart()}>-</button>
                                        <input value={quantity} />
                                        <button onClick={() => increaseQuality(uniqueProduct?.id)}>+</button> */}
                                    </div>
                                </td>
                                <td>Rs.  {cartitem?.subtotal}</td>
                                <td onClick={() => deleteCart(cartitem?.id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td>Your product Total Amount</td>
                            <td>{total}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className='checkout'>
                    <button onClick={checkout}>Checkout</button>
                </div>
            </div>

        </>
    )
}

export default Cart