// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/bg-banner.png") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '600px',
        width: '1500px',
      }}
    >
      <div className="content">
        <h3>
          One Stop
        </h3>
        <p>
          for all your grocery needs
        </p>
      </div>
    </section>
  );
}
