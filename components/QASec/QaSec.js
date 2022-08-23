import React, { useState } from 'react';
import Link from 'next/link';
import {Data} from './data';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { QaSecContainer } from './style';

function QaSec() {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index){
            return setClicked(null);
        }

        setClicked(index);
    }

  return (
    <QaSecContainer>
        <div className='QaSec__content'>
            <h2>Veja as dúvidas mais frequentes</h2>
            <div className='QaSec__accordion'>
                {Data.map((item, index) => {
                    return (
                        <div className='accordion__item' key={index}>
                            <div className={'QaSec__question ' + (clicked === index ? 'question__active' : '')} onClick={() => toggle(index)} key={index}>
                                <h3>{item.question}</h3>
                                <MdKeyboardArrowRight />
                            </div>
                            {clicked === index ? (
                                <p>{item.answer}</p>
                            ) : null }
                        </div>
                    )
                })}
            </div>
            <Link href="https://api.whatsapp.com/send?phone=5543991900107&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20curso%20de%20microfisioterapia%20com%20o%20Professor%20Daniel%20Grosjean" passHref>          
                <a target="_blank" rel="noreferrer noopener">Inscreva-se já!</a>
            </Link>
        </div>
    </QaSecContainer>
  )
}

export default QaSec;