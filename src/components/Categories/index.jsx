// Categories
import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products
        {' '}
        <span>categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/cate-1.png" alt="" />
          <h3>Staples</h3>
        </div>

        <div className="box">
          <img src="image/cate-2.png" alt="" />
          <h3>Snacks & Beverages</h3>
        </div>

        <div className="box">
          <img src="image/cate-3.png" alt="" />
          <h3>Packaged food</h3>
        </div>

        <div className="box">
          <img src="image/cate-4.png" alt="" />
          <h3>Personal Care</h3>
        </div>

        <div className="box">
          <img src="image/cate-5.png" alt="" />
          <h3>Household Care</h3>
        </div>
      </div>
    </section>
  );
}
