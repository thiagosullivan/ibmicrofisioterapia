import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BottomHeader, HeaderContainer, TopHeader } from './styles';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai';
import logoHeader from '../../assets/ibm-logo.png';

function Header() {
  return (
    <HeaderContainer>
      <TopHeader>
        <div className='topheader__content'>
          <div className='header__contact'>
            <a>
              <FaPhoneAlt />
              <span>(43) 9999-9999</span>
            </a>
            <a>
              <MdEmail />
              <span>contato@ibmicrofisioterapia.com.br</span>
            </a>
          </div>
          <div className='header__social'>
            <Link href="https://facebook.com">
              <a><AiFillFacebook/></a>
            </Link>
            <Link href="https://instagram.com">
              <a><AiFillInstagram/></a>
            </Link>
            <Link href="https://youtube.com">
              <a><AiFillYoutube/></a>
            </Link>
            <Link href="https://twitter.com">
              <a><AiOutlineTwitter/></a>
            </Link>
          </div>
        </div>
      </TopHeader>
      <BottomHeader>
        <div className='bottomheader__content'>
          <Image
            src={logoHeader}
            alt="Logo IBM"
          />
          <Link href="/">          
            <a>Inscreva-se já!</a>
          </Link>
        </div>
      </BottomHeader>
    </HeaderContainer>
  )
}

export default Header;