import React from 'react'
import './FAQ.css'

export default function FAQ() {
  return (
<div className="container3">
  <h1>Real Estate FAQ</h1>
  <div className="accordion">
    <div className="accordion-item">
      <button className="accordion-button">How do I buy a property?</button>
      <div className="accordion-content">
        <p>To buy a property, you need to contact our sales team and they will guide you through the process.</p>
      </div>
    </div>
    <div className="accordion-item">
      <button className="accordion-button">What are the payment options?</button>
      <div className="accordion-content">
        <p>We accept various payment methods including bank transfer, cheque, and online payment.</p>
      </div>
    </div>
    {/* Add more FAQ items as needed */}
  </div>
</div>

  )
}
