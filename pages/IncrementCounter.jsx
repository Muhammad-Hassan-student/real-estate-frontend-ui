import React from 'react'
import './IncrementCounter.css'

export default function IncrementCounter() {

    const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 1200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

  return (
    <>
    <div className='views text-center'><p className='text-slate-600'>More Than 200,000 Still Satisfied Customers</p>
    <div className='body2'>
      
      <div class="counter-container">
      <i class="fab fa-twitter fa-3x"></i>
      
      <div class="counter" data-target="200000"></div>
      <span>Awards Won</span>
    </div>

    

    <div class="counter-container">
      <i class="fab fa-youtube fa-3x"></i>
      <div class="counter" data-target="300000"></div>
      <span>YouTube Subscribers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-facebook fa-3x"></i>
      <div class="counter" data-target="90000"></div>
      <span>Facebook Fans</span>
    </div>

    <div class="counter-container">
    <i class="fa-solid fa-users text-white fa-3x" ></i>
     
      <div class="counter" data-target="250000"></div>
      <span>Satisfied Customer</span>
    </div>

    </div>
    </div>

    </>
  )
}
