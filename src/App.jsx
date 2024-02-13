import { useState } from 'react'

import Stepper from "./components/stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",  
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];

function App() {


  return (
    <>
      <div>Subs to Roadside Coder.</div>
      <Stepper stepsConfig={CHECKOUT_STEPS} />
    </>
  )
}

export default App
