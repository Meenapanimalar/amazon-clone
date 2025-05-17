import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
          <img className="home__image"  src="/assets/q1.jpg" alt="home_image" />
        

        <div className="home__row">
          <Product
          id={1222}
          title="SunRay Sunglasses – Trendy, UV-blocking protection 
          for your eyes."
          price ={2900}
          image="\assets\eyekeeper-eyekeeper-wigPlmzSU6A-unsplash.jpg"
          rating={5}/>
          <Product
          id={1223}
          title="eBitic Electronic Coffee Filter – Features a smooth handle and efficient filtration
           for a hassle-free coffee experience."
          price ={7890}
          image="\assets\avery-evans-RkCvkHgfiqc-unsplash.jpg"
          rating={3}/>
          <Product
          id={1224}
          title="Juliette Perfume – A captivating fragrance blend that
           exudes elegance and sophistication with every spritz"
          price ={8009}
          image="\assets\beautinow-niche-perfume-k1X05CSCybE-unsplash.jpg"
          rating={3}/>
           `
           `
        </div>
         <div className="home__row">
         <Product
          id={1225}
          title="How to Stop Worrying and Start Living by Dale Carnegie 
          – A guide to overcoming stress and embracing peace."
          price ={1290}
          image="\assets\cody-board-UMlXDGxY6Kc-unsplash.jpg"
          rating={4}/>
          <Product
          id={1226}
          title="EchoSound Wireless Speaker – Powerful sound, 
          compact design "
          price ={3480}
          image="\assets\dillon-shook-dCMuY2sZ8BY-unsplash.jpg"
          rating={4}/>
          {/* <Product
          id={1227}
          title="Herbology Bio Product – Organic, eco-friendly
           formula for enhancing your natural wellness"
          price ={45.90}
          image="\assets\alex-lvrs-mTw_GePuRUE-unsplash.jpg"
          rating={3}/> */}
           <Product
          id={1228}
          title="SmoothLip Lipstick – Bold color and hydration for perfect, all-day lips"
          price ={7800}
          image="\assets\mehmet-ali-turan--5n_54RiAH0-unsplash.jpg"
          rating={4}/>


        </div>
         <div className="home__row">
          <Product
          id={1229}
          title="FocusX Camera – Capture every moment in stunning high definition. Perfect for photography enthusiasts who demand clarity and detail"
          price ={6790}
          image="\assets\eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
          rating={5}/>
          <Product
          id={1230}
          title="VibeTone Speaker – Powerful sound in a small package. Enjoy crystal-clear audio with long-lasting battery life wherever you are."
          price ={6790}
          image="\assets\thomas-kolnowski-28qIgkH3IKQ-unsplash.jpg"
          rating={5}/>

        </div>
        
       </div>

      
    </div>
  )
}

export default Home
