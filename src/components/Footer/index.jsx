import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>
            Odhavram Trading
          </h3>
          <img src="image/poss.png" alt="" />
          <p>
            Vartha state, Gala no.2, Kolshet Road,
            Manorama Nagar
            Thane(W)-400 607
          </p>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +91 93240 66278
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +91 81691 81962
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            vrbhanushali@gmail.com
          </a>
        </div>
        <div className="box">
          <h3>quick info</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            features
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            categories
          </a>
        </div>
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <span>Mr. Web Designer</span>
          {' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
