import React from 'react'
import './CustomerReviews.css'
import client1 from '../images/reviews1.jpg'
import client2 from '../images/reviews2.jpg'
import client3 from '../images/review3.jpg'

export default function CustomerReviews() {
  return (
    <>
      
    {/* Main Container for Clients Review */}

<div className="container1">
  <h2> Our Happy Clients </h2>
 
  {/* Clients Review Section */}
  <div className="reviewSection">
    {/* Clients Review-1 Section Starts from Here  */}
    <div className="reviewItem">
      <div className="top">
        <div className="clientImage">
          <img src={client1} alt />
          <span>Abbas</span>
        </div>
        <ul>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
        </ul>
      </div>
      <article>
        <p className="review">"Exceptional service! The real estate agent went above and beyond to find me the perfect home, guiding me through every step with professionalism and expertise."
"Highly recommend! The entire team was responsive, knowledgeable, and made the buying process seamless. Couldn't be happier with my new home!" </p>
        <p>feb 14, 2024</p>
      </article>
    </div>
    {/* Clients Review-2 Section Starts from Here  */}
    <div className="reviewItem">
      <div className="top">
        <div className="clientImage">
          <img src={client2} alt />
          <span>Fatima Qureshi</span>
        </div>
        <ul>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-regular fa-star" /></li>
        </ul>
      </div>
      <article>
        <p className="review">
"Exceptional service! The team at "PrimePropertyPortal Estate Company" exceeded my expectations with their professionalism and dedication, making my buying/selling experience smooth and stress-free. Highly recommended!"</p>
        <p>feb 15, 2024</p>
      </article>
    </div>
    {/* Clients Review-3 Section Starts from Here  */}
    <div className="reviewItem">
      <div className="top">
        <div className="clientImage">
          <img src={client3} alt />
          <span>Basit Hussain</span>
        </div>
        <ul>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
          <li><i className="fa-solid fa-star" /></li>
        </ul>
      </div>
      <article>
        <p className="review">"Outstanding experience! The team went above and beyond to find us the perfect home within our budget. Their expertise and dedication made the process smooth and stress-free. 5 stars all the way!"
        </p>
        <p>march 02, 2024</p>
      </article>
    </div>
  </div>
</div>


    </>
  )
}
