import React from 'react';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SecThreeCard, SectionThreeContainer } from './style';

function SectionThree() {
  return (
    <SectionThreeContainer>
        <div className='secThree__content'>
            <h2>Calendário do Curso</h2>
            <p>Será ministrado em São Paulo-SP</p>
        </div>
        <div className='secThree__bottom'>
            <SecThreeCard>
                <AiOutlineCalendar />
                <h4>16/09</h4>
                <span>Aula magna <br/> &#40;aberto a todos&#41;</span>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <AiOutlineCalendar />
                <h4>17/09 e 18/09</h4>
                <span>Atualização P9 <br/> &#40;obrigatório já ter feito P9&#41;</span>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <AiOutlineCalendar />
                <h4>19/09 a 23/09</h4>
                <span>Curso Completo P9 <br/> &#40;obrigatório já ter feito P7 e P8&#41;</span>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecThreeCard>
        </div>
    </SectionThreeContainer>
  )
}

export default SectionThree