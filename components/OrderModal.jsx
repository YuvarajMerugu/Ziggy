import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import css from '../styles/OrderModal.module.css'


export default function OrderModal({ opened, setOpened, PaymentMethod }) {
    const theme = useMantineTheme();
    const [FormData, setFormData]= useState({})
    const handleInput=(e)=>{
        setFormData({...FormData, [e.target.name]: e.target.value})
    }

    const total = typeof window !== 'undefined' && localStorage.getItem('total')

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const id=await createOrder({...FormData, total, PaymentMethod})
        console.log('Order Placed', id)
    }
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ?
                theme.colors.dark[9] : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <input 
                onChange={handleInput}
                type="text" name="name" required placeholder='Name' />
                <input 
                onChange={handleInput}
                type="text" name="phone" required placeholder='Phone Number' />
                <textarea 
                onChange={handleInput}
                name='address' rows={4} placeholder="Address" required></textarea>
                <span> You will pay <span>Rs {total} </span> on Delivery</span>
                <button type='submit' className='btn'>Place Order</button>
            </form>
        </Modal>
    )
};
