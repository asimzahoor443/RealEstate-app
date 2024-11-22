import React from 'react';
import './Contact.css';
import LeftImg from '../../assests/contact.jpg';
import { MdCall } from 'react-icons/md';
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best serice for you. We
            believe a good place to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first Row*/}

            <div className="flexColStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>
        </div>
        {/*Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src={LeftImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
