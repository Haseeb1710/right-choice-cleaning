import { useEffect, useRef } from 'react'
import './PayPalButton.css'

export default function PayPalButton({ amount = '50.00', description = 'Cleaning Service Deposit' }) {
  const paypalRef = useRef(null)
  const rendered = useRef(false)

  useEffect(() => {
    if (rendered.current) return
    if (window.paypal && paypalRef.current) {
      rendered.current = true
      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'pill',
          label: 'pay',
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              description,
              amount: { value: amount, currency_code: 'GBP' },
            }],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          alert(`Payment successful! Order ID: ${order.id}. Thank you for booking with Right Choice Cleaning!`)
        },
        onError: (err) => {
          console.error('PayPal error:', err)
          alert('There was an issue processing your payment. Please try again or call us.')
        },
      }).render(paypalRef.current)
    }
  }, [])

  return (
    <div className="paypal-wrap">
      {/* =====================================================
          PAYPAL INTEGRATION
          =====================================================
          This component renders PayPal Smart Payment Buttons.
          The PayPal SDK is loaded in index.html.

          To activate:
            1. Go to https://developer.paypal.com/dashboard/
            2. Create a REST API App → copy your CLIENT ID
            3. In index.html, replace "YOUR_PAYPAL_CLIENT_ID" with your real Client ID
            4. Change currency code from GBP to your currency if needed

          For live payments, change:
            client-id=YOUR_CLIENT_ID&currency=GBP
          to use your LIVE (not sandbox) client ID.
      ===================================================== */}
      <div className="paypal-header">
        <i className="fa-brands fa-paypal"></i>
        <span>Secure Payment via PayPal</span>
      </div>
      <div ref={paypalRef} id="paypal-button-container" />
      <p className="paypal-note">
        <i className="fa-solid fa-lock"></i>
        Payments are secure and encrypted via PayPal. We accept all major cards.
      </p>
    </div>
  )
}
