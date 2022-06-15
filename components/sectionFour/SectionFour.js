import React from 'react';
import Link from 'next/link';
import { SecFourCard, SectionFourContainer } from './style';

function SectionFour() {
  return (
    <SectionFourContainer>
        <h2>Como ingressar na Estácio?</h2>
        <div className='secFour__bottom'>
            <SecFourCard>
                <h4>Ingresso Simplificado</h4>
                <p>Comece a sua graduação de uma forma simples e rápida: use apenas seu histórico escolar!</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>Vestibular</h4>
                <p>Presencial ou online, tenha a liberdade de escolher o dia e a hora da sua prova.</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>Enem</h4>
                <p>Use sua nota para entrar na Estácio! Notas acima de 300 garantem bolsas durante o curso todo.</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>Transferência</h4>
                <p>Vem concluir seu curso com a gente sem precisar pagar nada pela transferência! Aproveite todas as matérias cursadas!</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
            <SecFourCard>
                <h4>Segunda Graduação</h4>
                <p>Sem necessidade de vestibular, você aproveita créditos de matérias cursadas!</p>
                <Link href="/">
                    <a>Increva-se Já!</a>
                </Link>
            </SecFourCard>
        </div>
    </SectionFourContainer>
  )
}

export default SectionFour