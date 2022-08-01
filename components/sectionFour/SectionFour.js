import React from 'react';
import Link from 'next/link';
import { BsTelegram } from 'react-icons/bs';
import { SecFourCard, SectionFourContainer } from './style';

function SectionFour() {
  return (
    <SectionFourContainer>
        <h2>Qual o perfil necessário para inscrição em cada dia do curso?</h2>
        <div className='secFour__bottom'>
            <SecFourCard>
                <h4>1</h4>
                <p>Aula Magna - Todos os&#40;as&#41; profissionais de saúde podem participar</p>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>2</h4>
                <p>Atualização P9 - Exclusivo para alunos&#40;as&#41; que já tenham feito o P9. Estes&#40;as&#41; também poderão adquirir e participar do P9 completo.</p>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>3</h4>
                <p>P9 Completo - É preciso que o aluno&#40;a&#41; tenha feito P7 e P8.</p>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecFourCard>
        </div>
        <a className='btn__telegram' href="https://t.me/+XQqt0UM5R3hmMmZh" target="_blank" rel="noreferrer noopener">
            <BsTelegram />
            Clique e Participe do Nosso Grupo no Telegram
        </a>
    </SectionFourContainer>
  )
}

export default SectionFour