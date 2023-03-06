import React from 'react'
import Background from './images/571bc932d0aebf04806c202a09ba2e8c--japanese-sweets-japanese-food.jpg'
import './Contact.css'
function Contact() {
return (
  <div className="contact">
   <div className="leftSide"  style={{
          backgroundImage: 'url('+Background+')'}}>
   </div>
  <div className="rightSide">
  <h2> Contact Us</h2>
  <form id="contact-form" method="POST">
  <label htmlFor="name">Full Name</label>
  <input name="name" placeholder="Enter full name..." type="text" />
  <label htmlFor="email">Email</label>
  <input name="email" placeholder="Enter email..." type="email" />
  <label htmlFor="message">Message</label>
  <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>

  <button className="btn" type="submit">Submit</button>



  </form>
  </div>



  </div>

)
}
  
export default Contact