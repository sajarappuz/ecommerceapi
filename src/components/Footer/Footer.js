import React from 'react'
import "./Footer.css"
function Footer() {
 return (
    <div className="footer">
        <div className="leftfot">
            <ul className='links'>
                <li>Contact us</li>
                <li>Support</li>
                <li>Services</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className="rightfot">
            <ul className="media">
                <li>Facebook</li>
                <li>instagram</li>
                <li>twitter</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;