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
                <div className='secThree_title'>
                    <AiOutlineCalendar />
                    <h4>Aula Magna</h4>
                </div>
                <div className='secThree__txts'>
                    <p><strong>Data:</strong> 16/09/22</p>
                    <p><strong>Horário:</strong> Recepção a partir das 18:30 com coffee e início às 19:00</p>
                    <p><strong>Conteúdo:</strong> Origem da criação da microfisioterapia.</p>
                    <p><strong>Público:</strong> Profissionais da área da saúde, especialmente fisioterapeutas e público em geral para conhecimento da origem e do uso do método.</p>
                    <p><strong>Dinâmica:</strong> Apresentação da IBM, Palestra com Professor Grosjean. Alunos poderão enviar questões prévias que serão selecionadas e esclarecidas pelo Professor Grosjean.</p>
                    <p><strong>Comunicação:</strong>  Tradução simultânea</p>
                </div>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <div className='secThree_title'>
                    <AiOutlineCalendar />
                    <h4>Curso de Atualização do P9 <br/> <span>&#40;E4 e E5&#41;</span></h4>
                </div>
                <div className='secThree__txts'>
                    <p><strong>Data:</strong> 17/09 e 18/09</p>
                    <p><strong>Horário:</strong> Recepção a partir das 08:00, início 08:30 encerramento às 18:00 &#40;intervalo p/almoço 12:30 às 14:00&#41;.</p>
                    <p><strong>Conteúdo:</strong> Estudos atualizados e novas criações do método.</p>
                    <p><strong>Público:</strong> Exclusivo para alunos&#40;as&#41; que já tenham feito o P9. Estes&#40;as&#41; também poderão adquirir e participar do P9 completo.</p>
                    <p><strong>Dinâmica</strong> Aula com Professor Grosjean e prática com apoio dos Professores Dr. Rodolfo Biazi, Dr. Rodrigo Rabbottini e Dra.Rosana Ancona Mateus.</p>
                    <p><strong>Estrutura</strong> Tradução simultânea e Macas para prática.</p>
                </div>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecThreeCard>
            <SecThreeCard>
                <div className='secThree_title'>
                    <AiOutlineCalendar />
                    <h4>Curso completo P9 <br/> <span>&#40;E4 e E5&#41;</span></h4>
                </div>
                <div className='secThree__txts'>
                    <p><strong>Data:</strong> 19/09 a 23/09</p>
                    <p><strong>Horário:</strong> Recepção a partir das 08:00, Início às 08:30, encerramento às 18:00 nos dias 19/20/21 e 22 &#40;intervalo p/ almoço 12:30 às 14:00&#41;.
                        <br/> No dia 23 encerramento às 13:00</p>
                    <p><strong>Conteúdo:</strong> Pautado nos novos estudos do Professor Daniel Grosjean, e exclusivo aos presentes.</p>
                    <p><strong>Público:</strong> Exclusivo para alunos&#40;as&#41; que já tenham feito o P7 e P8.</p>
                    <p><strong>Dinâmica</strong> Aula com Professor Grosjean e prática com apoios dos Professores Dr. Rodolfo Biazi, Dr. Rodrigo Rabbottini e Dra. Rosana Ancona Mateus.</p>
                    <p><strong>Estrutura</strong> Tradução simultânea e Macas para prática.</p>
                </div>
                <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                    <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
                </Link>
            </SecThreeCard>
        </div>
    </SectionThreeContainer>
  )
}

export default SectionThree