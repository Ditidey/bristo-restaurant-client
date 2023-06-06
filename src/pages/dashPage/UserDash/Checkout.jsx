import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Checkout = ({price, cart}) => {
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState(''); 
    const [transactionId, setTransactionId] = useState('');
     const [process, setProcess] = useState(false);
    const [axiosSecure] = useAxiosSecure()
     const {user} = useAuth();

     useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price})
        .then(res=>{
            setClientSecret(res.data.clientSecret)
            console.log(res.data.clientSecret)
        })
     },[ ])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return;
        }

        const card = element.getElement(CardElement);
        if (card == null) {
            return;
        }
         setProcess(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error){
          setCardError(error.message)
        }else{
            setCardError('')
            console.log(paymentMethod)
        }
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card: card,
                    billing_details: {
                        name: user?.name || 'unknown',
                        email: user?.email || 'Anonymous'
                    }
                }
            }
        );
        if(confirmError){
            setCardError(error.message)
        }
    
        if(paymentIntent.status == 'succeeded'){
             
            console.log(paymentIntent.id)
             setTransactionId(paymentIntent.id)
             const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
             }

             axiosSecure.post('/payments', {payment})
             .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        text: 'payment successful',
                        timer: 1500,
                        showConfirmButton: false
                    })
                }
             })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-warning mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600 ms-6 mt-4'>{cardError}</p>}
            {transactionId && <p className=' ms-6 mt-4'>Payment completed. Transaction id: {transactionId}</p>}
        </div>
    );
};

export default Checkout;