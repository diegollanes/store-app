import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HBTOwHf3Hd2ed0EcTiSqWxNML5EL5M1sqfgW6CUXC7KKL8QSCG824lTdgKX06rK8L21qDWbOZd3bgvMCgndeuOz00fsNCVBDo';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name= 'Videogames Store'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeButton;