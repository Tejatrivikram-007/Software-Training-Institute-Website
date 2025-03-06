import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footercontainer">
        <div className="leftside">
            <div className="copyright">
                <p style={{color:'orange',fontWeight:'700'}}>© 2025 QSpiders</p>
            </div>
        </div>
        <div className="rightside">
            <div className="jspiders">
                <span className='java'>
                    <p style={{color:'blue',fontWeight:'700'}}><i className="fa-brands fa-java"></i> Jspiders</p>
                </span>
                <span className="python">
                    <p style={{color:'blue',fontWeight:'700'}}><i class="fa-brands fa-python"></i> Pyspiders</p>
                </span>
                <span className="number">
                    <p style={{color:'orange',fontWeight:'700'}}><FaSquarePhone />+91-9686900500</p>
                    <p style={{color:'orange',fontWeight:'700'}}><FaSquarePhone />+91-9686198555 </p>

                </span>
                <span className="enqiury">
                    <p style={{color:'orange',fontWeight:'700'}}><i class="fa-solid fa-envelope"></i>enquiry@qspiders.com</p>
                </span>
            </div>
      
        </div>
    </div>
  )
}

export default Footer