import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SecSixCard, SecSixContainer } from './style';
import DepoOne from '../../assets/depo-1.png';

function SectionSix() {
  return (
    <SecSixContainer>
        <h2>Há mais de 50 anos transformando a vida de milhões de alunos</h2>
        <div className='secSix__bottom'>
            <SecSixCard>
                <div className='sixCard__top'>
                    <Image src={DepoOne}/>
                    <div>
                        <h4>Adriana Paixão</h4>
                        <span>Psicologia</span>
                    </div>
                </div>
                <p>“O curso de Psicologia sempre me trouxe a certeza da grandeza da profissão. Todas as teorias estudadas ao longo dos cinco anos te fazem ter clareza em sua forma de aplicação.”</p>
            </SecSixCard>
            <SecSixCard>
                <div className='sixCard__top'>
                    <Image src={DepoOne}/>
                    <div>
                        <h4>Adriana Paixão</h4>
                        <span>Psicologia</span>
                    </div>
                </div>
                <p>“O curso de Psicologia sempre me trouxe a certeza da grandeza da profissão. Todas as teorias estudadas ao longo dos cinco anos te fazem ter clareza em sua forma de aplicação.”</p>
            </SecSixCard>
            <SecSixCard>
                <div className='sixCard__top'>
                    <Image src={DepoOne}/>
                    <div>
                        <h4>Adriana Paixão</h4>
                        <span>Psicologia</span>
                    </div>
                </div>
                <p>“O curso de Psicologia sempre me trouxe a certeza da grandeza da profissão. Todas as teorias estudadas ao longo dos cinco anos te fazem ter clareza em sua forma de aplicação.”</p>
            </SecSixCard>
        </div>
        <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
            <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
        </Link>
    </SecSixContainer>
  )
}

export default SectionSix