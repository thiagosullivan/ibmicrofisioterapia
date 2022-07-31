import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import secFive from '../../assets/img-sec-5.png';
import { YouTubeLite } from 'react-youtube-lite';
import { SecFiveCard, SectioFiveContainer } from './style';

function SectionFive() {
  return (
    <SectioFiveContainer>
        <div className='secFive__content'>
            <div className='secFive__top'>
                <Image src={secFive} width={300} height={300}/>
                <div className='secFive__top__text'>
                    <h2>Principais Dúvidas &#40;assista e saiba mais&#41;</h2>
                    <p>Dr. Rodrigo Rabbottini esclarece as principais dúvidas.</p>
                </div>
            </div>
            <div className='secFive__video'>
                <YouTubeLite
                    url="https://www.youtube.com/watch?v=6UPJg9JHpkY"
                    title="UM POUCO MAIS A RESPEITO DO NOVO CURSO DE MICROFISIOTERAPIA DO PROFESSOR DANIEL GROSJEAN I Exclusivo"
                    poster="sddefault"
                />
            </div>
            <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
            </Link>
        </div>
    </SectioFiveContainer>
  )
}

export default SectionFive