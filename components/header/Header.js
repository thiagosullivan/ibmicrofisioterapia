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
            <a href="https://api.whatsapp.com/send?phone=5543991900107" target="_blank" rel="noreferrer noopener">
              <FaPhoneAlt />
              <span>&#40;43&#41; 99190-0107</span>
            </a>
            <a href="mailto:contato@ibmicrofisioterapia.com.br" >
              <MdEmail />
              <span>contato@ibmicrofisioterapia.com.br</span>
            </a>
          </div>
          <div className='header__social'>
            <Link href="https://www.facebook.com/ibmicrofisioterapia" passHref>
              <a target="_blank" rel="noreferrer noopener"><AiFillFacebook/></a>
            </Link>
            <Link href="https://www.instagram.com/ibmicrofisioterapia" passHref>
              <a target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCp-iA0Ur3VNrfXAMXgocdMQ" passHref>
              <a target="_blank" rel="noreferrer noopener"><AiFillYoutube/></a>
            </Link>
            <Link href="https://twitter.com/InstitutoIbm" passHref>
              <a target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
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
          <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
            <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
          </Link>
        </div>
      </BottomHeader>
    </HeaderContainer>
  )
}

export default Header;