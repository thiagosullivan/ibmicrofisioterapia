import Image from 'next/image';
import React from 'react';
import FormBasica from '../../assets/formacao-basica.webp';
import Form1 from '../../assets/formacao-avancada-1.webp';
import Form2 from '../../assets/formacao-avancada-2.webp';
import Form3 from '../../assets/formacao-avancada-3.webp';
import { FormacoesCard, FormacoesContainer } from './styles';

function Formacoes() {
  return (
    <FormacoesContainer>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={FormBasica}
                    width={300}
                    height={93}
                    alt="Formação Básica"
                />
            </div>
            <h3>1º Módulo &#40;A/B/C&#41;:</h3>
            <h4>Introdução a Micro – Todas as teorias científicas da <span>BASE da Micro</span></h4>
            <div className='formCard__infos'>
                <p><strong>Estudos:</strong></p>
                <p>Embriologia/Filogênese/Fisiologia/Anatomia/Física Quântica/Epigenética/Memória Celular/Neurociência do Toque/Psiconeuroimunologia/Influências do Ambiente no Organismo &#40;Externo e Interno&#41;
                </p>
                <ul>
                    <p>Estudos dos 3 tecidos Primários da Embriologia</p>
                    <li>Mesoderma – Músculo/Ossos/Articulações</li>
                    <li>Ectoderma – SN e Pele &#40;Circuitos Nervosos/Centros Nervosos&#41;</li>
                    <li>Endoderma – Mucosas &#40;Sistema Visceral e Órgãos&#41;</li>
                </ul>
            </div>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={Form1}
                    width={300}
                    height={93}
                    alt="Formação Básica 2"
                />
            </div>
            <h3>2º Módulo &#40;NP1/NP2/NP3&#41;</h3>
            <h4>Etiologias que afetam nosso organismo:</h4>
            <div className='formCard__infos'>
                <ul>
                    <p>Ambiente Externo &#40;Sofridas&#41;</p>
                    <li>- Matéria &#40;Infecções/Tóxicas/Contusões - Traumáticas/Obstrutivas&#41; </li>
                    <li>- Vibratórias &#40;Ondas/Frequências&#41;</li>
                    <li>- Toxicidades</li>
                    <li>- Emoções</li>
                </ul>
                <ul>
                    <p>Ambiente Interno &#40;Geradas/Produzidas&#41;</p>
                    <li>Existencial</li>
                    <li>Relacional</li>
                    <li>Endoderma – Mucosas &#40;Sistema Visceral e Órgãos&#41;</li>
                </ul>
                <p>Individualidade – Essência do Ser</p>
                <p>Capacidades e Desejos do Indivíduo com ele mesmo e em Relação aos outros &#40;Mundo&#41;</p>
                <p>Terreno – Campo Morfogenético – Forma dos Genes</p>
                <p>- História de Nossa Construção &#40;Familiar e com Meio Ambiente&#41;</p>
                <div className='formCard__alert'>
                    <p>Formação Básica – Certificação para Atendimentos</p>
                    <p>Existe uma Prova ao Final desta formação &#40;2ºMódulo&#41;, para habilitar o Fisioterapeuta para os Atendimentos.</p>
                </div>
            </div>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={Form2}
                    width={300}
                    height={93}
                    alt="Formação Avançada 1"
                />
            </div>
            <h3>1º Avançado - P3 – P6 &#40;E1-E2&#41;</h3>
            <h4>Novas Etiologias &#40;Etiologias Primárias&#41; </h4>
            <div className='formCard__infos'>
                <p>Entropia – Etiologias que alteram o Funcionamento do Corpo &#40;Função Geral e Específica&#41;</p>
                <p>Negantropia – Construção do Corpo Físico e do Indivíduo em todas suas Dimensões &#40;Psíquica/Afetiva/Mental/Intelectual&#41;</p>
            </div>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        <FormacoesCard>
            <div className='form__img'>
                <Image
                    src={Form3}
                    width={300}
                    height={93}
                    alt="Formação Avançada 2"
                />
            </div>
            <h3>2º Avançado – P7 – P8 (E3)</h3>
            <h4>Proteções <br/>Adaptações e Mecanismos de sobrevivência para o Organismo.</h4>
            <div className='formCard__infos'>
                <p>- Forças</p>
                <p>- Capacidades</p>
                <p>- Comportamental</p>
            </div>
            <a href="whatsapp.com">Acesse o Módulo</a>
        </FormacoesCard>
        
    </FormacoesContainer>
  )
}

export default Formacoes