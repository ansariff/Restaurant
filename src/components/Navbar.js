import React, {useRef} from 'react';
import Logo from '../assets/images/logo.png';
import cart from './Data';
const Navbar = () => {
  // work on search btn 
  const searchRef = useRef();
  const SearchHandle=()=>{
    searchRef.current.classList.toggle('active') // have a look here
  }

  //working with cart btn
  const cartRef=useRef();
  const Cartbtn =()=>{
    cartRef.current.classList.toggle('active')
  }
  //working with navigation btn
  const navRef=useRef();
  const NavHandle=()=>{
    navRef.current.classList.toggle('active')
  }
  return (
    <>
    <header className='header'>
      <a href="#" className='logo'>
        <img src={Logo} alt="logo_restaurant" />
      </a>
      <nav className="navbar" id='menu-btn' ref={navRef}>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#menu'>Menu</a>
      <a href='#products'>Products</a>
      <a href='#review'>Review</a>
      <a href='#contact'>Contact</a>
      <a href='#blogs'>Blogs</a>
    </nav>

    <div className="icons">
    <div class="fas fa-search" onClick={SearchHandle}></div>
    <div className="fas fa-shopping-cart"  onClick={Cartbtn}></div>
    <div className="fa-solid fa-bars" onClick={NavHandle}></div>
    </div>

    <div className="search-form" ref={searchRef}>
    <input type="text" placeholder='Search Food' id='search-box'/>
    <label htmlFor="search-box" className='fas fa-search'></label>
    </div>
    <div className="cart-item-container" ref={cartRef}>
    {cart.map((item,index)=>(
      <div className='cart-item'>
        <span className='fas fa-times'></span>
        <img src={item.img} alt="" />
        <div className="content">
          <h3>Cart Name {index}</h3>
          <div className="price">$9.99/-</div>
        </div>
      </div>
    ))}
    <a href="#" className='btn'>Check Out</a>
    </div>
    </header>
    
    </>
  )
}

export default Navbar
