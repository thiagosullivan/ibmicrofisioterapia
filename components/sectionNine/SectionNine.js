import React from 'react';
import { YouTubeLite } from 'react-youtube-lite';
import { SectionNineContainer } from './style';

function SectionNine() {
  return (
    <SectionNineContainer>
        <h2>Convite do Professor Grosjean</h2>
        <YouTubeLite
            url="https://www.youtube.com/embed/dl5oJI9oy1k"
            title="Convite do Professor Daniel Grosjean I Curso de Microfisioterapia e Atualizações"
            poster="sddefault"
        />
    </SectionNineContainer>
  )
}

export default SectionNine