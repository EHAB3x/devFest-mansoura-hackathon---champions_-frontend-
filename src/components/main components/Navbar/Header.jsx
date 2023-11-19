import React from 'react'
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    link
  } from "@nextui-org/react";
  import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navLinkStyle=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }
    const menuItems = [
        "Home",
        "Products",
        "Doctors",
        "Contact",
        "Profile"
      ];
  return (
    <Navbar className='head' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="more"
        />
        <NavbarBrand className='justify-center'>
          <NavLink to={'/'} className="font-bold text-inherit heros">R</NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-4 content" justify="center">
        <NavbarItem>
          <NavLink style={navLinkStyle} to={'/'}>
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink style={navLinkStyle} to={'/products'}>
            Products
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink style={navLinkStyle} to={'/doctors'}>
            Doctors
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink style={navLinkStyle} to={'/contact'}>
            Contact
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink style={navLinkStyle} to={'/profile'}>
          Profile
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className='always_show'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <Button as={NavLink} style={{color:"white",backgroundColor:"red"}} to={'/emergency'} variant="flat">
            Emergency
          </Button>

          <Button as={NavLink}  color='secondary' to={'/signin'}>Sign in</Button>

        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              style={{color:"black"}}
              className="w-full"
              to={item === "Home" ? '/' : item.toLowerCase()}
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header