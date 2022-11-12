import Image from 'next/image'
import { useStore } from '../store/store'
import Layout from '../components/Layout'
import { urlFor } from '../lib/client';
import css from '../styles/Cart.module.css'
import toast, {Toaster} from "react-hot-toast"
import { useState } from 'react';
import OrderModal from '../components/OrderModal';
export default function Cart() {
    const CartData = useStore((state) => state.cart)
    const removePizza=useStore((state)=>state.removePizza)
    const [PaymentMethod, setPaymentMethod] = useState(null)
    const handleRemove=(i)=>{
        removePizza(i);
        toast.error('Item Removed')
    }
    const total=()=>CartData.pizzas.reduce((a,b)=>a+b.Quantity* b.price, 0)

    const handleonDelivery=()=>{
        setPaymentMethod(0);
        typeof window!=='undefined' && localStorage.setItem('total', total())
    }

    return (
        <Layout>
            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.pizzas.length > 0 &&
                                CartData.pizzas.map((pizza, i) => {
                                    const src = urlFor(pizza.image).url()
                                    return (
                                        <tr key={i}>
                                            <td
                                                className={css.imageTd}>
                                                <Image
                                                    loader={() => src}
                                                    src={src}

                                                    alt=""
                                                    objectFit='cover'
                                                    width={85}
                                                    height={85}
                                                />
                                            </td>
                                            <td>
                                                {pizza.name}
                                            </td>
                                            <td>
                                                {
                                                    pizza.size === 0 ? "Small" : pizza.size === 1 ? "Medium" : "Large"
                                                }
                                            </td>
                                            <td>
                                                {pizza.price}
                                            </td>
                                            <td>
                                                {pizza.Quantity}
                                            </td>
                                            <td>
                                                {pizza.price * pizza.Quantity}
                                            </td>
                                            <td
                                            style={{color:"var(--themeRed)" ,cursor:'pointer'}}
                                            onClick={()=>handleRemove(i)}
                                            >x</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>Rs {total()}</span>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        <button className='btn'
                        onClick={handleonDelivery}
                        >Pay on Delivery</button>
                        <button className='btn'>Pay Now</button>
                    </div>
                </div>

            </div>
            <Toaster />
            <OrderModal
                opened={PaymentMethod===0}
                setOpened={setPaymentMethod}
                PaymentMethod={PaymentMethod}
            />
        </Layout>
    )
};
