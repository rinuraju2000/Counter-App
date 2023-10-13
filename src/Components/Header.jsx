import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand className='text-primary' href='#'>
            <img className='me-2'
              src='https://cdn.pixabay.com/animation/2022/09/24/02/37/02-37-04-457_512.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header