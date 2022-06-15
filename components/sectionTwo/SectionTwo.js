import React from 'react'
import { SecTwoCard, SecTwoContainer } from './style'

function SectionTwo() {
  return (
    <SecTwoContainer>
        <h2>Faça parte do maior grupo de <br/> educação superior do Brasil.</h2>
        <div className='secTwo__bottom'>
            <SecTwoCard>
                <div className='secTwo__icon'></div>
                <p>Mais de  87 cursos com notas 4 e 5 no MEC.</p>
            </SecTwoCard>
            <SecTwoCard>
                <div className='secTwo__icon'></div>
                <p>Aqui as aulas não param. Nossas unidades seguem todas as orientações de segurança da OMS.</p>
            </SecTwoCard>
            <SecTwoCard>
                <div className='secTwo__icon'></div>
                <p>A plataforma de ensino digital mais elogiada pelos alunos.</p>
            </SecTwoCard>
        </div>
    </SecTwoContainer>
  )
}

export default SectionTwo;