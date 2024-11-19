import React from 'react';
import Prologis from '../assests/prologis.png';
import Tower from '../assests/prologis.png';
import Equinix from '../assests/equinix.png';
import Realty from '../assests/realty.png';
import './Companies.css';
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Prologis} alt="" />
        <img src={Tower} alt="" />
        <img src={Equinix} alt="" />
        <img src={Realty} alt="" />
      </div>
    </section>
  );
};

export default Companies;
