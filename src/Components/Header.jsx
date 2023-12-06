import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
  

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <Link className="text-decoration-none " to='/'>
            <img className='mx-2'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDK7O_yq6NvDchLV89Xla9F7Uiw51oNGBhiQ&usqp=CAU'
              height='50'
             
              alt=''
              loading='lazy'
            />
            Media-App
            </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header