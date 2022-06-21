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
                    <Link href="/">
                        <a>Increva-se Já!</a>
                    </Link>
                </div>
            </div>
        </div>
    </SecSevenContainer>
  )
}

export default SectionSeven