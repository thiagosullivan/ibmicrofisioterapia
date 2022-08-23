import React from 'react';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import {Data} from './data';
import { ArtigosContainer, ArticleItem } from './style';

function Artigos() {
  return (
    <ArtigosContainer>
        {Data.map((item, index) => {
          return (
            <ArticleItem>
                <h3>{item.title}</h3>
                <a className="btn_download" download="Cirurgia" href={item.link}>
                    <MdOutlineDownloadForOffline />
                    Download
                </a>
            </ArticleItem>
          )
        })}
    </ArtigosContainer>
  )
}

export default Artigos