import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SecSixCard, SecSixContainer } from './style';
import Rodrigo from '../../assets/Rodrigo.png';
import Rodolfo from '../../assets/Rodolfo.png';
import Rosana from '../../assets/Rosana.png';

function SectionSix() {
  return (
    <SecSixContainer>
        <h2>Há mais de 20 anos transformando a vida de milhares de pessoas</h2>
        <div className='secSix__bottom'>
            <SecSixCard>
                <div className='sixCard__top'>
                    <Image src={Rodolfo} alt="Rodolfo" height={130} width={130}/>
                    <div>
                        <h4>Dr. Rodolfo Biazi</h4>
                        <span>Psicologia</span>
                    </div>
                </div>
                <div className='sixCard__txt'>
                    <p>Graduado em fisioterapia Pós graduado em terapia manual e postural</p>
                    <p>Mestre em bioengenharia</p>
                    <p>Especializações:</p>
                    <ul>
                        <li>- Microfisioterapia,</li>
                        <li>- Leitura biológica,</li>
                        <li>- Fisioterapia integrativa,</li>
                        <li>- Hipnose,</li>
                        <li>- Podoposturologia,</li>
                        <li>- ENM - equilíbrio neuro-muscular,</li>
                        <li>- Terapia craniossacral,</li>
                        <li>- Naturopatia,</li>
                        <li>- Osteopatia</li>  
                    </ul>

                </div>
            </SecSixCard>
            <SecSixCard>
                <div className='sixCard__top'>
                    <Image src={Rodrigo} alt="Rodrigo" height={130} width={130}/>
                    <div>
                        <h4>Dr. Rodrigo Rabbottini</h4>
                        <span>Psicologia</span>
                    </div>
                </div>
                <div className='sixCard__txt'>
                    <ul>
                        <li>- Graduação em Fisioterapia </li>
                        <li>- Pós graduado em Terapia Manual e Postural</li>
                        <li>- Pós graduado em Traumato Ortopedia e Desportiva</li>
                        <li>- Formação internacional em Microfisioterapia</li>
                        <li>- Formação Internacional em Leitura Biológica</li>
                        <li>- Formação Internacional em Memórias e ciclos de vida</li>
                        <li>- Formação Internacional em Posturoterapia Neurossensorial</li>
                        <li>- Formação Internacional em Geobiologia e FengShui</li>
                        <li>- Professor de Microfisioterapia Brasil e Portugal</li> 
                    </ul>
                </div>
            </SecSixCard>
            <SecSixCard>
                <div className='sixCard__top'>
                    <Image src={Rosana} alt="Rosana" height={130} width={130}/>
                    <div>
                        <h4>Dra. Rosana Ancona Mateus</h4>
                        <span>Psicologia</span>
                    </div>
                </div>
                <div className='sixCard__txt'>
                        <p>Graduada em fisioterapia pela UNIBAN </p>
                        <p>Pós graduada em terapia manual e postural </p>
                        <p>Pós graduada em ortopedia e traumatologia</p>
                        <p>Especializações:</p>
                    <ul>
                        <li>- Formação internacional em microfisioterapia</li>
                        <li>- Formação internacional em leitura biológica</li>
                        <li>- Hipnose</li>
                        <li>- Formação internacional em ENM - equilíbrio neuro-muscular</li>
                        <li>- Terapia craniossacral</li>
                        <li>- Florais de bach / araretama e california entre outros</li>
                        <li>- Professora na área de microfisioterapia</li>
                    </ul>
                </div>
            </SecSixCard>
        </div>
        <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
            <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
        </Link>
    </SecSixContainer>
  )
}

export default SectionSix