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
      <Link href="/">
        <Image src={LogoFooter} width={150} height={150} />
      </Link>
        <div className='footer__contact'>
          <div className='footer__social'>
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
          <div className='footer__contact__two'>
            <a href="https://api.whatsapp.com/send?phone=5543991900107" target="_blank" rel="noreferrer noopener">
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