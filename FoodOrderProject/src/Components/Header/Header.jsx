import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your <span className="highlight">Favourite Food</span> here</h2>
        <p>Enjoy a wide variety of delicious dishes made with the freshest ingredients. Our menu has something for everyone — from tasty starters to mouthwatering main courses and sweet desserts.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
