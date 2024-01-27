import React, {useRef} from 'react';
import Logo from '../assets/images/logo.png';
import cart from './Data';
const Navbar = () => {
  const searchRef = useRef();
  const cartRef=useRef();
  const navbarRef=useRef();

  // work on search btn 
  const Srchbtn=()=>{
    searchRef.current.classList.toggle('active') // have a look here
    console.log('srch')
  }

  //working with cart btn
  const Cartbtn =()=>{
    cartRef.current.classList.toggle('active')
    console.log('crt')
  }
  //working with navigation btn
  const Barsbtn=()=>{
    navbarRef.current.classList.toggle('active')
    console.log('nav')
  }
  return (
    <>
    <header className='header'>
      <a href="#" className='logo'>
        <img src={Logo} alt="logo_restaurant" />
      </a>
      <nav className="navbar" ref={navbarRef}>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#menu'>Menu</a>
      <a href='#products'>Products</a>
      <a href='#review'>Review</a>
      <a href='#contact'>Contact</a>
      <a href='#blogs'>Blogs</a>
    </nav>
{/* // icons  */}
    <div className="icons">
    <div className="fas fa-search" onClick={Srchbtn}></div>
    <div className="fas fa-shopping-cart"  onClick={Cartbtn}></div>
    <div className="fa-solid fa-bars" id='menu-btn' onClick={Barsbtn}></div>
    </div>

    <div className="search-form" ref={searchRef}>
    <input type="text" placeholder='Search Food' id='search-box'/>
    <label htmlFor="search-box" className='fas fa-search'></label>
    </div>
    <div className="cart-item-container active" ref={cartRef}>
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
    <a href="##" className='btn'>Check Out</a>
    </div>
    </header>
    
    </>
  )
}

export default Navbar;
