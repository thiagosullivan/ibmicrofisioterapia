import React from 'react';
import Link from 'next/link';
import { SecFourCard, SectionFourContainer } from './style';

function SectionFour() {
  return (
    <SectionFourContainer>
        <h2>Qual o perfil necessário para inscrição em cada dia do curso?</h2>
        <div className='secFour__bottom'>
            <SecFourCard>
                <h4>1</h4>
                <p>Aula Magna - Todos os&#40;as&#41; profissionais de saúde podem participar</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>2</h4>
                <p>Atualização P9 - Exclusivo para alunos&#40;as&#41; que já tenham feito o P9. Estes&#40;as&#41; também poderão adquirir e participar do P9 completo.</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>3</h4>
                <p>P9 Completo - É preciso que o aluno&#40;a&#41; tenha feito P7 e P8.</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
        </div>
    </SectionFourContainer>
  )
}

export default SectionFour