import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div>

    <header className="header_section">
        <div className="header_item header_logo">Sebastian Britez</div>

        <div className="header_item header_links">
            <a href="/" className="header_link"><button class="ui-btn">
  <span>
    Inicio 
  </span>
</button></a>
            <a href="/about" className="header_link"><button class="ui-btn">
  <span>
    Sobre mi 
  </span>
</button></a>
    
<a href="/contact" className="header_link"><button class="ui-btn">
  <span>
    Contactame 
  </span>
</button></a>
        </div>
    </header>
    </div>
  )
}

export default Header