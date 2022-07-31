import React from 'react'
import { SectionTwoImg, SecTwoCard, SecTwoContainer } from './style';
import Rodolfo from '../../assets/Rodolfo.png';
import Rodrigo from '../../assets/Rodrigo.png';
import Rosana from '../../assets/Rosana.png';
import Image from 'next/image';
import { YouTubeLite } from 'react-youtube-lite';

function SectionTwo() {
  return (
    <SecTwoContainer>
        <h2>O curso contará com a participação <br/>de mais três profissionais.</h2>
        <div className='secTwo__bottom'>
            <div className='secTwo_col1'>
                <SecTwoCard>
                    <div className='secTwo__icon'>
                        <Image src={Rodolfo} layout="fill"/> 
                    </div>
                    <p>Dr. Rodolfo Biazi</p>
                </SecTwoCard>
                <SecTwoCard>
                    <div className='secTwo__icon'>
                        <Image src={Rodrigo} layout="fill"/> 
                    </div>
                    <p>Dr. Rodrigo Rabbottini</p>
                </SecTwoCard>
                <SecTwoCard>
                    <div className='secTwo__icon'>
                        <Image src={Rosana} layout="fill"/> 
                    </div>
                    <p>Dra. Rosana Ancona Mateus</p>
                </SecTwoCard>
            </div>
            <div className='secTwo_col2'>
                <YouTubeLite
                    url="https://www.youtube.com/embed/COsVkWN9Zuk"
                    title="Prof. Daniel Grosjean I Exclusividade e Autorização ao IBM Instituto Brasileiro de Microfisioterapia"
                    poster="sddefault"
                />
            </div>
        </div>
    </SecTwoContainer>
  )
}

export default SectionTwo;