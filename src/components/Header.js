import React from 'react';
import { ReactComponent as MainLogo } from '../logo.svg';
import { BiCart } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

// props are properties coming from parent component
export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <Link to="/"> 
        <h1>< MainLogo /> PlantShed</h1>
        </Link>
      </div>
      <div>
        <Link to="/plants"> 
        <h2> Plants</h2>
        </Link>
      </div>
      <div>
        <Link to="/coffee"> 
        <h2> Coffee</h2>
        </Link>
      </div>
      <div>
        <Link to="/about"> 
        <h2> About</h2>
        </Link>
      </div>
      <div>
        <Link to="/faqs"> 
        <h2> FAQs</h2>
        </Link>
      </div>
      <div>
        <Link to="/cart">
        <BiCart className='icon' />{' '}
          {props.countCartItems ? (
            <button className="add">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        <Link to="/search"> <FiSearch className='icon'/></Link>
      </div>
    </header>
  );
}

