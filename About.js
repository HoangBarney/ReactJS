import React from 'react'
import image from './images/Cute-bakery-chef-girl-with-love-cartoon-Graphics-6991672-1.jpg'
import './About.css'
function About() {
  return (
    <div class="container">
      <div class="image">
        <img src={image} className="img" alt="" weight="400px" height="350px"/>
        </div>
      
      <div class="text">
      <h2>About Me</h2>
      <p>I'm not a professional chef. I just collect the best recipes for everyone. All the recipes I collected are very simple and the highest rating in the world! You never get confused when you read these recipes and it's very easy for you to make a good dish. Trust me!!!. Beside, I also test that recipe by making it by myself</p>
      <p>I also change the recipe sometimes to make it perfect. I hope you guys feel easy to make it and enjoy your meal!!! </p>
    </div>
  </div>

  )
}

export default About
