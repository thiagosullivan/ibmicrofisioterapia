import React from 'react'
import { SectionTwoImg, SecTwoCard, SecTwoContainer } from './style';
import Rodolfo from '../../assets/Rodolfo.png';
import Rodrigo from '../../assets/Rodrigo.png';
import Rosana from '../../assets/Rosana.png';
import Image from 'next/image';
import { YouTubeLite } from 'react-youtube-lite';
import { AiOutlineInstagram } from 'react-icons/ai';

function SectionTwo() {
  return (
    <SecTwoContainer>
        <div className='secTwo__bottom'>
            <div className='secTwo_col1'>
                <h2>O curso contará com a participação <br/>de mais três profissionais.</h2>
                <SecTwoCard>
                    <div className='secTwo__icon'>
                        <Image src={Rodolfo} layout="fill"/> 
                    </div>
                    <div className='secTwo_text'>
                        <p>Dr. Rodolfo Biazi</p>
                        <a href="https://instagram.com/drrodolfobiazi" target="_blank">
                            <AiOutlineInstagram />
                        </a>
                    </div>
                </SecTwoCard>
                <SecTwoCard>
                    <div className='secTwo__icon'>
                        <Image src={Rodrigo} layout="fill"/> 
                    </div>
                    <div className='secTwo_text'>
                        <p>Dr. Rodrigo Rabbottini</p>
                        <a href="https://instagram.com/rodrigorabbottini" target="_blank">
                            <AiOutlineInstagram />
                        </a>
                    </div>                    
                </SecTwoCard>
                <SecTwoCard>
                    <div className='secTwo__icon'>
                        <Image src={Rosana} layout="fill"/> 
                    </div>
                    <div className='secTwo_text'>
                        <p>Dra. Rosana Ancona Mateus</p>
                        <a href="https://instagram.com/rosanaancona" target="_blank">
                            <AiOutlineInstagram />
                        </a>
                    </div>
                </SecTwoCard>
            </div>
            <div className='secTwo_col2'>
                <h2>Professor Daniel Grosjean  gravou especialmente para você!</h2>
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