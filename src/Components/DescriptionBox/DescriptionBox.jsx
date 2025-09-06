import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="decriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An ecommerce website is an online platform that facilitates
            buying and selling of products or services over the internet
            and serves as a vitual marketplace where buisness and indiviual
            showcase. their products, interact with customers and conduct the
            transactions without the need for physical appearance.
        </p>
        <p>
            E-Commerce website typically display products or services along 
            with the detail description, images , prices and any available 
            variations. Each product usually has its own dedicated page 
            with relevant information.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox
