// import React from 'react';
// import '../styles/aboutus.css'
// import { FaFacebook } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div className="about-us-container">
//       {/* About Us Section */}
//       <section className="about-us-section">
//         <h1>About Us</h1>
//         <p>
//           Welcome to CodeMasters Institute, a leading software training institute dedicated to empowering students with the skills needed to excel in the tech industry. With a focus on hands-on learning and industry-relevant curriculum, we have helped thousands of students achieve their career goals.
//         </p>
//       </section>

//       {/* Our Founders Section */}
//       <section className="founders-section">
//         <h2>Our Founders</h2>
//         <div className="founders-list">
//           <div className="founder">
//             <img src="founder1.jpg" alt="Founder 1" />
//             <h3>John Doe</h3>
//             <p>Co-Founder & CEO</p>
//           </div>
//           <div className="founder">
//             <img src="founder2.jpg" alt="Founder 2" />
//             <h3>Jane Smith</h3>
//             <p>Co-Founder & CTO</p>
//           </div>
//         </div>
//       </section>

//       <section className="companies-section">
//         <h2>Companies Associated With</h2>
//         <div className="company-logos">
//           <img src="company1.png" alt="Company 1" />
//           <img src="company2.png" alt="Company 2" />
//           <img src="company3.png" alt="Company 3" />
//           <img src="company3.png" alt="Company 4" />
//           <img src="company3.png" alt="Company 5" />
//           <img src="company3.png" alt="Company 6" />
//           <img src="company3.png" alt="Company 7" />
//           <img src="company3.png" alt="Company 8" />
//           <img src="company3.png" alt="Company 9" />
//           <img src="company3.png" alt="Company 10" />



//         </div>
//       </section>

//       <section className="students-placed-section">
//         <h2>Students Placed</h2>
//         <p>Over <strong>10,000+</strong> students have been successfully placed in top companies worldwide.</p>
//       </section>

//       <section className="social-links-section">
//         <h2>Follow Us</h2>
//         <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;

//----------------------------------------------------

import React from 'react';
import '../styles/aboutus.css'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import girish1 from '../images/girish1.jpg';
import Header from '../components/Header';
import abilash from '../images/trainers/abilash.jpg'
import afnan from '../images/trainers/afnan.jpg'
import dhanraj from '../images/trainers/dhanraj.jpg'
import naveen from '../images/trainers/naveen.jpg'
import nirmala from '../images/trainers/nirmala.jpg'
import prajwal from '../images/trainers/prajwal.jpg'
import shipla from '../images/trainers/shilpa.png'
// import abilash from '../images/trainers'


const AboutUs = () => {
  return (
    <div className="about">
      <Header/><br />
      <div className="about-us-container">
      <section className="about-us-section">
        <h1>About Us</h1>
        <p>
          Welcome to <h1><b style={{color:'orange'}}> Q, J, PY  </b>spiders </h1> a leading software training institute dedicated to empowering students with the skills needed to excel in the tech industry. With a focus on hands-on learning and industry-relevant curriculum, we have helped thousands of students achieve their career goals.
        </p>
      </section>

      <section className="founders-section">
        <h2>Our Founders</h2>
        <div className="founders-list">
          <div className="founder">
            <img src={girish1} alt="Girish" />
            <h3>Girish</h3>
            <p>Co-Founder & CEO</p>
          </div>
        </div>
      </section>

      <section className="companies-section">
        <h2>Companies Associated With</h2><br />
        <div className="company-logos">
          <img src="http://api.qspiders.com/media/clients/EFI_pdQaA6e.png" alt="Company 1" />
          <img src="http://api.qspiders.com/media/clients/Capegemini_60.png" alt="Company 2" />
          <img src="http://api.qspiders.com/media/clients/3dplm_XXe7oH6.png" alt="Company 3" />
          <img src="http://api.qspiders.com/media/clients/Birlasoft_YZhugEA.png" alt="Company 4" />
          {/* <img src="http://api.qspiders.com/media/clients/Birlasoft_YZhugEA.png" alt="Company 5" /> */}
          <img src="http://api.qspiders.com/media/clients/sharp_sZ49lwe.png" alt="Company 6" />
          <img src="http://api.qspiders.com/media/clients/Integra_Micro_Systems_chIzJjj.jpg" alt="Company 7" />
          <img src="http://api.qspiders.com/media/clients/Metric_stream_qYDZUOg.png" alt="Company 8" />
          <img src="http://api.qspiders.com/media/clients/Deliotte_C9ukSJM_1_yA82JEr.png" alt="Company 9" />
          {/* <img src="company3.png" alt="Company 10" /> */}
        </div>
      </section>

      <section className="students-placed-section">
        <h2>Students Placed</h2>
        <p>Over <strong>10,000+</strong> students have been successfully placed in top companies worldwide.</p>
      </section>

      <section className="trainers">
        <div className='meet_our_trainers'>Meet Our Trainers</div>
        <div className="trimg"><div className="trainer">
          <img src={naveen} alt="" />
          <h4 className="name">Naveen Boregowda</h4>
          <p className="subject">Branch Head and Manual Testing</p>
        </div>
        <div className="trainer">
          <img src={abilash} alt="" />
          <h4 className="name">Abhilash B</h4>
          <p className="subject">Core Java and Selenium</p>

        </div>
        <div className="trainer">
          <img src={afnan} alt="" />
          <h4 className="name">Mohammed Afnan Aman</h4>
          <p className="subject">Python and Power BI</p>
        </div>
        <div className="trainer">
          <img src={shipla} alt="" />
          <h4 className="name">Shipla Poojari</h4>
          <p className="subject">Python</p>
        </div>
        <div className="trainer">
          <img src={nirmala} alt="" />
          <h4 className="name">Nirmala B S</h4>
          <p className="subject">Banking Domine</p>
        </div>
        <div className="trainer">
          <img src={dhanraj} alt="" />
          <h4 className="name">Dhanraj Gowda</h4>
          <p className="subject">SQL</p>

        </div>
        <div className="trainer">
          <img src="company3.png" alt="" />
          <h4 className="name">Jeevith U</h4>
          <p className="subject"> Advance Java & Java Programming</p>
        </div>
        <div className="trainer">
          <img src={prajwal} alt="" />
          <h4 className="name">Prajwal C</h4>
          <p className="subject"> Web Tech and React JS</p>
        </div></div>
      </section>

      <section className="social-links-section">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;