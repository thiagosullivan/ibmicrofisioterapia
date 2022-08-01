import React from 'react';
import Image from 'next/image';
import LogoFooter from '../../assets/ibm-logo-white.png';
import { FooterContainer } from './style';
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <FooterContainer>
        <Image src={LogoFooter} width={150} height={150} />
        <div className='footer__contact'>
          <div className='footer__social'>
              <Link href="https://www.facebook.com/ibmicrofisioterapia">
                <a><AiFillFacebook/></a>
              </Link>
              <Link href="https://www.instagram.com/ibmicrofisioterapia">
                <a><AiFillInstagram/></a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCp-iA0Ur3VNrfXAMXgocdMQ">
                <a><AiFillYoutube/></a>
              </Link>
              <Link href="https://twitter.com/InstitutoIbm">
                <a><AiOutlineTwitter/></a>
              </Link>
          </div>
          <div className='footer__contact__two'>
            <a href="tel:5543991900107">
              <FaPhoneAlt />
              <span>&#40;43&#41; 99190-0107</span>
            </a>
            <a href="mailto:contato@ibmicrofisioterapia.com.br">
              <MdEmail />
              <span>contato@ibmicrofisioterapia.com.br</span>
            </a>
          </div>
        </div>
    </FooterContainer>
  )
}

export default Footer