// Features
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>Free and quick delivery at your doorstep</p>
          </div>
          <div className="box">
            <img src="image/feature-img-4.png" alt="" />
            <h3>Extra savings</h3>
            <p>Best price for all requirements as a penny saved is a penny earned</p>
          </div>
          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>easy payment</h3>
            <p>Various methods of payment available to make shopping easier</p>
          </div>
        </div>
      </div>
    </section>
  );
}
