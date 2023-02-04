import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Konnectify</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user avatar"
        />
        <span>Temmy</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
