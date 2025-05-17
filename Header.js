import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"



export default function Header() {
  const [{basket,user}] = useStateValue();

  const handleAuthentication =()=>{
    if(user){
      auth.signOut();
    }


  }

  return (
    <div className='header'>
    
    <Link to="/">
      <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
       alt="amazon-logoimg"/>  
     </Link>

      <div className='header__search'>
        <input className="header__searchInput" type='text'></input>
        <SearchIcon className='header__searchIcon'/>
        </div>  

        <div className='header__nav' >
       <Link to= {!user && "/Login"}>
        <div onClick={handleAuthentication} className='header__option'>
        <span className='header__optionLine1'>
             Hello {user ? user.email.split('@')[0] : 'Guest'}
         </span>
         <span className='header__optionLine2'>
         {user ? 'Sign Out' : 'Sign In'}
       </span>
        </div>

          </Link>
          <Link to="/orders">
        <div className='header__option'>
          <span className='header__optionLine1'>
            Returns
          </span>
          <span className='header__optionLine2'>
           & Orders
          </span>

        </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLine1'>
             your
           </span>
          <span className='header__optionLine2'>
            prime
          </span>
        
        </div>
        <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionLine2 header__basketCount'>
            {basket?.length}
            </span>

          </div>
          </Link>


          
          </div>  
    </div>
  )
}
