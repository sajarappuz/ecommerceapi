import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <div className="left">
            <h1>WIZZSTORE.IN</h1>
        </div>
        <div className="right">
            <button>LOGOUT</button>
        </div>
    </div>
  )
}

export default Header