import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { HiSearch } from "react-icons/hi";


export default function Header() {
    return (
       <nav class="header">
       <div class="nav_items">
            <Link to="shop" style={{ textDecoration: 'none'}}><a class="nav_item shop" href="#">Shop</a></Link> 
            <Link to="contact" style={{ textDecoration: 'none' }}><a class="nav_item contact" href="#">Contact</a></Link> 
            <Link to="/product" style={{ textDecoration: 'none'}}><a class="nav_item product" href="#">Products</a></Link> 
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}><div class="logo">Paintings</div></Link>
        <div class="nav_items">
            <Link to="order" style={{ textDecoration: 'none' }}><a class="nav_item order" href="#">Order</a></Link>
            <Link to="about" style={{ textDecoration: 'none'}}><a class="nav_item about" href="#">About</a></Link>
            <Link to="/" style={{ textDecoration: 'none' }}><a class="nav_item search"><HiSearch size='1rem' color='' /></a></Link>
            <Link to="/login" style={{ textDecoration: 'none' }}><a class="nav_item">Login</a></Link>
        </div> 
        </nav>
    );
}