import React from 'react'
import creme from './images/vanilla-bean-creme-brulee-recipe-1-of-1-2.jpg'
import cake from './images/sponge-cake-16.jpg'
import chocolate from './images/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg'
import tiramisu from './images/Tiramisu-11484-500x500.jpg'
import cheesecake from './images/best-cheesecake-recipe-6.jpg'
import roll from './images/Vegan-Cinnamon-Rolls-Plant-Based-on-a-Budget-1-2.jpg'
import sticky from './images/Thai-Mango-Sticky-Rice-Takestwoeggs-Process-Final-sq.jpg'
import pie from './images/vegan-apple-pie-22-sq-2.jpg'
import baklava from './images/turkish-baklava-with-pistachio-16.jpg'
import { useNavigate } from 'react-router-dom'
import './App.css'
function Home() {
 const navigate = useNavigate()
  return (
    <>
    <div>
      
        <h1>Homemade Dessert</h1>
      <div id="meal">

        <div className="meal-item">
      <div className="meal-name">
       <h3>Creme Brulee</h3>
        <img src={creme} className="cream" alt="" />
      <button onClick={() => navigate('/creme')} className="rep-btn">Get Recipe</button>
     
    </div>
    </div>
    
        
    <div className="meal-item">
      <div className="meal-name">
    <h3>Sponge Cake</h3>
    <img src={cake} alt=""/>
    <button onClick={() => navigate('/cake')} className="rep-btn">Get Recipe</button>
    </div>
    </div>

    <div className="meal-item">
      <div className="meal-name">
    <h3>Chocolate Chip Cookies</h3>
    <img src={chocolate} alt=""/>
    <button onClick={() => navigate('/cookies')} className="rep-btn">Get Recipe</button>
    </div>
    </div>
    
    <div className="meal-item">
      <div className="meal-name">
    <h3>Tiramisu</h3>
    <img src={tiramisu} alt=""  />
    <button onClick={() => navigate('/tiramisu')} className="rep-btn">Get Recipe</button>
    </div>
    </div>
    
    <div className="meal-item">
      <div className="meal-name">
    <h3>Cheesecake</h3>
    <img src={cheesecake} alt=""/>
    <button onClick={() => navigate('/cheesecake')} className="rep-btn">Get Recipe</button>
    </div>
    </div>

    <div className="meal-item">
      <div className="meal-name">
    <h3>Classic Cinamon Roll </h3>
    <img src={roll} alt=""  />
    <button onClick={() => navigate('/roll')} className="rep-btn">Get Recipe</button>
    </div>
    </div>

    <div className="meal-item">
      <div className="meal-name">
    <h3>Thai Sweet Sticky Rice With Mango </h3>
    <img src={sticky} alt=""  />
    <button onClick={() => navigate('/sticky')} className="rep-btn">Get Recipe</button>
    </div>
    </div>

    <div className="meal-item">
      <div className="meal-name">
    <h3>Apple Pie </h3>
    <img src={pie} alt=""  />
    <button onClick={() => navigate('/pie')} className="rep-btn">Get Recipe</button>
    </div>
    </div>

    <div className="meal-item">
      <div className="meal-name">
    <h3>Traditional Greek Baklava</h3>
    <img src={baklava} alt=""  />
    <button onClick={() => navigate('/baklava')} className="rep-btn">Get Recipe</button>
    </div>
    </div>
</div>
</div>
   </>
    )

}

export default Home
