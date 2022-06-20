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
        <Link href="/">
            <a>Inscreva-se já!</a>
        </Link>
    </SecSixContainer>
  )
}

export default SectionSix