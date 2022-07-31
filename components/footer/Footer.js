import React from 'react';
import Image from 'next/image';
import LogoFooter from '../../assets/ibm-logo-white.png';
import { FooterContainer } from './style';

function Footer() {
  return (
    <FooterContainer>
        <Image src={LogoFooter} />
    </FooterContainer>
  )
}

export default Footer