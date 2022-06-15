import React from 'react';
import Link from 'next/link';
import { FaRegBuilding } from 'react-icons/fa';
import { SecThreeCard, SectionThreeContainer } from './style';

function SectionThree() {
  return (
    <SectionThreeContainer>
        <div className='secThree__content'>
            <h2>Modelos de Ensino</h2>
            <p>Aqui, você encontra o modelo de ensino que mais combina com a sua rotina.</p>
        </div>
        <div className='secThree__bottom'>
            <SecThreeCard>
                <FaRegBuilding />
                <h4>Presencial</h4>
                <span><strong>4</strong> a <strong>5 dias</strong> de aulas presenciais por semana.</span>
                <Link href="/">
                    <a>Increva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <FaRegBuilding />
                <h4>Presencial</h4>
                <span><strong>4</strong> a <strong>5 dias</strong> de aulas presenciais por semana.</span>
                <Link href="/">
                    <a>Increva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <FaRegBuilding />
                <h4>Presencial</h4>
                <span><strong>4</strong> a <strong>5 dias</strong> de aulas presenciais por semana.</span>
                <Link href="/">
                    <a>Increva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <FaRegBuilding />
                <h4>Presencial</h4>
                <span><strong>4</strong> a <strong>5 dias</strong> de aulas presenciais por semana.</span>
                <Link href="/">
                    <a>Increva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <FaRegBuilding />
                <h4>Presencial</h4>
                <span><strong>4</strong> a <strong>5 dias</strong> de aulas presenciais por semana.</span>
                <Link href="/">
                    <a>Increva-se já!</a>
                </Link>
            </SecThreeCard>
        </div>
    </SectionThreeContainer>
  )
}

export default SectionThree