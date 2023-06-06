import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';
 
const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_KEY)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item, 0);
    const price = parseFloat(total );
    return (
        <div>
            <SectionTitle heading={'payment'} subheading={'Please process'}></SectionTitle>
            

            <Elements stripe={stripePromise}>
                <Checkout price={price} cart={cart}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;