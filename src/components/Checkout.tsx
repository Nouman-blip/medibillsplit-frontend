import  { useEffect } from 'react';
import { initializePaddle, Paddle } from '@paddle/paddle-js';

interface CheckoutProps {
  priceId: string;
}

function Checkout({priceId}:CheckoutProps) {
  useEffect(() => {
    // Initialize Paddle using your sandbox token (replace with your production token as needed)
    initializePaddle({ environment: 'sandbox', token: 'test_2c98a197b05c5d4a5c253c5e350' })
      .then((paddleInstance: Paddle | undefined) => {
        if (paddleInstance) {
          // Open the Paddle checkout immediately with the dynamic priceId
          paddleInstance.Checkout.open({
            items: [
              {
                priceId, // dynamic priceId from props
                quantity: 1,
              },
            ],
            // You can include any additional Paddle checkout settings here
          });
        }
      })
      .catch((error) => {
        console.error('Paddle initialization failed:', error);
      });
  });

  // Render nothing as we immediately launch the Paddle checkout
  return null;
}

export default Checkout;
