import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SecFiveCard, SectioFiveContainer } from './style';
import secFive from '../../assets/img-sec-5.png';

function SectionFive() {
  return (
    <SectioFiveContainer>
        <div className='secFive__content'>
            <div className='secFive__top'>
                <Image src={secFive}/>
                <div className='secFive__top__text'>
                    <h2>Tá difícil né?</h2>
                    <p>A gente te ajuda a realizar o sonho de fazer faculdade, hoje!</p>
                </div>
            </div>
            <div className='secFive__bottom'>
                <SecFiveCard>
                    <h4>Seguro Educacional</h4>
                    <p>O Seguro Educacional garante ao aluno um crédito de até 6x o valor da sua mensalidade em caso de desemprego involuntário ou morte do responsável financeiro.</p>
                </SecFiveCard>
                <SecFiveCard>
                    <h4>Diluição Solidária</h4>
                    <p>DIS é a Diluição Solidária da Estácio. Uma forma de pagamento da nossa instituição em que você paga apenas R$ 49,00* nos meses iniciais da  sua graduação e a diferença para o valor integral dessas mensalidades é diluída ao longo de todos os meses até o fim do curso.</p>
                </SecFiveCard>
                <SecFiveCard>
                    <h4>Prouni Fies</h4>
                    <p>Com o FIES - Fundo de Financiamento Estudantil, você financia suas mensalidades do curso todo e só começa a pagar depois de formado.</p>
                </SecFiveCard>
            </div>
            <Link href="/">
                <a>Inscreva-se já!</a>
            </Link>
        </div>
    </SectioFiveContainer>
  )
}

export default SectionFive