
import './App.css'
import tinycolor from 'tinycolor2';
import React, { useState } from 'react';
import { SateliteIcon, RocketIcon, TelescopioIcon } from './components/Icons';
//cards
import CardTitulo from './components/Cards/CardTitulo';
import CardProjetos from './components/Cards/CardProjetos';
import CardContato from './components/Cards/CardContato';
import CardPerfil from './components/Cards/CardPerfil';
import CardSocials from './components/Cards/CardSocials';
import CardLinguagens from './components/Cards/CardLinguagens';
import CardFinal from './components/Cards/CardFinal';
import CardMenu from './components/Cards/CardMenu';

function App() {

  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Cor de fundo padrão

  //mudar cor do fundo
  const mudarCorFundo = (cor) => {
    setBackgroundColor(cor);
    document.body.style.backgroundColor = cor;
  }

  const stylesTheme = {

    versionOne: {
      borderRadius: '1.25rem',
      border: ' 0.12rem solid #000',
      color: 'black',


    }
  };

  // Converte a cor de fundo para um objeto com propriedades r, g e b
  const color = tinycolor(backgroundColor).toRgb();

  // Define um limite para considerar as cores como escuras
  const threshold = 82 + 0 + 0; // Soma dos valores R, G e B de (82, 0, 0)

  // Soma dos valores R, G e B da cor de fundo
  const colorSum = color.r + color.g + color.b;

  // Verifica se a cor de fundo é escura e ajusta as cores de acordo
  const adjustedStylesTheme = colorSum <= threshold
    ? {
      ...stylesTheme.versionOne,
      color: 'white',       // Cor do texto
      border: '0.125rem solid #fff'  // Cor da borda
    }
    : {
      ...stylesTheme.versionOne,
      color: 'black',       // Cor do texto quando a cor de fundo não é escura
      border: '0.125rem solid #000'  // Cor da borda quando a cor de fundo não é escura
    };

  const corIcon = {
    color: adjustedStylesTheme.color
  };
  // ------------------------------------------
  return (

    <section>

      <main className='container'>
        <section className='sec-1'>
          <CardTitulo stylesTheme={adjustedStylesTheme} />

          <CardProjetos titulo="Profissionais" tags={['React', 'Parcerias', 'Grupos']} iconProjeto={<SateliteIcon {...corIcon} />} stylesTheme={adjustedStylesTheme} />
          <CardProjetos titulo="Pessoais" tags={['Criativos', 'Diversao', 'Canvas']} iconProjeto={<TelescopioIcon {...corIcon}/>} stylesTheme={adjustedStylesTheme} />


        </section>
        <section className='sec-2'>
          <CardPerfil stylesTheme={adjustedStylesTheme} className='card' />
          <CardContato stylesTheme={adjustedStylesTheme} className='card' />
          <CardSocials stylesTheme={adjustedStylesTheme} className='card' />
        </section>

        <section className='sec-3'>

          <div className='one '>
            <CardLinguagens stylesTheme={adjustedStylesTheme} className='card' />
            <CardMenu stylesTheme={adjustedStylesTheme} mudarCor={mudarCorFundo} className='card' />
          </div>

          <CardFinal stylesTheme={adjustedStylesTheme} className='card' />
        </section>

      </main>

    </section>
  )
}

export default App
