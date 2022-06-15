import React from 'react';
import Image from 'next/image';
import { BannerContainer } from './style';
import bannerOne from '../../assets/banner-1.png';
import bannerTwo from '../../assets/banner-2.png';

function Banner() {
  return (
    <BannerContainer>
        <div className='banner__content'>
            <Image src={bannerOne} alt="Banner 1"/>
            <Image src={bannerTwo} alt="Banner 2"/>
        </div>
    </BannerContainer>
  )
}

export default Banner