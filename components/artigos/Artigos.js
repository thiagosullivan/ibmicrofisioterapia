import React from 'react';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import { ArtigosContainer, ArticleItem } from './style';

function Artigos() {
  return (
    <ArtigosContainer>
        <ArticleItem>

            <a class="btn_download" download="Cirurgia" href="/common/uploads/midias_arquivos/4c72be0589b1fee06f1af6632d8ae802.pdf">
                <MdOutlineDownloadForOffline />
            </a>
        </ArticleItem>
    </ArtigosContainer>
  )
}

export default Artigos