import React, { useState } from 'react';
import Link from 'next/link';
import {Data} from './data';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { SecEightContainer } from './style';

function SectionEight() {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index){
            return setClicked(null);
        }

        setClicked(index);
    }

  return (
    <SecEightContainer>
        <div className='secEight__content'>
            <h2>Veja as dúvidas mais frequentes</h2>
            <div className='secEight__accordion'>
                {Data.map((item, index) => {
                    return (
                        <div className='accordion__item' key={index}>
                            <div className={'secEight__question ' + (clicked === index ? 'question__active' : '')} onClick={() => toggle(index)} key={index}>
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
            <Link href="/">
                <a>Increva-se Já!</a>
            </Link>
        </div>
    </SecEightContainer>
  )
}

export default SectionEight