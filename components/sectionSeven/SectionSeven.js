import React from 'react';
import Link from 'next/link';
import { SecSevenContainer } from './style';

function SectionSeven() {
  return (
    <SecSevenContainer>
        <div className='secSeven__content'>
            <h2>O seu futuro não pode esperar</h2>
            <div className='secSeven__text'>
                <div className='secSeven__text__content'>
                    <h3>Comece a estudar agora!</h3>
                    <p>Alguns dos campus Estácio já estão abertos, com infraestrutura 100% segura, seguindo todos os protocolos e orientações determinadas pelo Governo, para você estudar presencialmente com outras pessoas. Aquele cheiro de sala de aula que tanto faz falta.</p>
                    <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                        <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                    </Link>
                </div>
            </div>
        </div>
    </SecSevenContainer>
  )
}

export default SectionSeven