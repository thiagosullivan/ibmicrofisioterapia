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
                        <span>Fisioterapeuta</span>
                    </div>
                </div>
                <div className='sixCard__txt'>
                    <p>Graduado em Fisioterapia</p>
                    <p>Pós Graduado em Terapia Manual e Postural</p>
                    <p>Mestre em Bioengenharia</p>
                    <ul>
                        <p><strong>Especializações:</strong></p>
                        <li>- Microfisioterapia,</li>
                        <li>- Leitura Biológica,</li>
                        <li>- Fisioterapia Integrativa,</li>
                        <li>- Hipnose,</li>
                        <li>- Podoposturologia,</li>
                        <li>- ENM - Equilíbrio Neuro-Muscular,</li>
                        <li>- Terapia Craniossacral,</li>
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
                        <span>Fisioterapeuta</span>
                    </div>
                </div>
                <div className='sixCard__txt'>
                    <p>Graduação em Fisioterapia</p>
                    <p>Pós Graduado em Terapia Manual e Postural</p>
                    <p>Pós Graduado em Traumato Ortopedia e Desportiva</p>
                    <ul>
                        <p><strong>Especializações:</strong></p>
                        <li>- Formação Internacional em Microfisioterapia</li>
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
                        <span>Fisioterapeuta</span>
                    </div>
                </div>
                <div className='sixCard__txt'>
                        <p>Graduada em Fisioterapia pela Uniban</p>
                        <p>Pós Graduada em Terapia Manual e Postural</p>
                        <p>PPós Graduada em Ortopedia e Traumatologia</p>
                    <ul>
                        <p><strong>Especializações:</strong></p>
                        <li>- Formação Internacional em Microfisioterapia</li>
                        <li>- Formação Internacional em Leitura Biológicaa</li>
                        <li>- Hipnose</li>
                        <li>- Formação internacional em ENM - Equilíbrio Neuro-Muscular</li>
                        <li>- Terapia Craniossacral</li>
                        <li>- Florais de Bach - Araretama e California, entre outros</li>
                        <li>- Professora na Área de Microfisioterapia</li>
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