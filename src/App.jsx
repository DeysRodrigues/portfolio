

import './App.css'
import tinycolor from 'tinycolor2';
import rocket from './assets/icons/rocket.svg'
import React, { useState } from 'react';
import { SateliteIcon, RocketIcon } from './components/Icons';
import CardTitulo from './components/Cards/CardTitulo';
import CardProjetos from './components/Cards/CardProjetos';
import CardContato from './components/Cards/CardContato';
import CardPerfil from './components/Cards/CardPerfil';
import CardSocials from './components/Cards/CardSocials';
import CardLinguagens from './components/Cards/CardLinguagens';



function App() {

  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Cor de fundo padrão

  // const mudarCorFundo = (cor) => {
  //   setBackgroundColor(cor);
  //   document.body.style.backgroundColor = cor;

  // }

  const stylesTheme = {
    versionColor: {
      borderColor: 'black',
      color: 'black'
    },
    versionGeral: {
      borderRadius: '1.25rem',
      border: ' 0.125rem solid #000',
      color: 'black'

    },
    versionOne: {
      borderRadius: '1.25rem',
      border: ' 0.125rem solid #000',
      color: 'black'

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
      ...stylesTheme,
      color: 'white',       // Cor do texto
      border: '0.125rem solid #fff'  // Cor da borda
    }
    : stylesTheme

  return (

    <section>

      <main className='container'>
        <section className='sec'>
          <CardTitulo stylesTheme={stylesTheme.versionOne} />

          <CardProjetos titulo="Profissionais" tags={['React', 'JavaScript', 'CSS']} iconProjeto={<RocketIcon />} stylesTheme={stylesTheme.versionOne} />
          <CardProjetos titulo="Profissionais" tags={['React', 'JavaScript', 'CSS']} iconProjeto={<RocketIcon />} stylesTheme={stylesTheme.versionOne} />


        </section>
        <section className='sec'>
          <CardPerfil stylesTheme={stylesTheme.versionOne} className='card'/>
          <CardContato stylesTheme={stylesTheme.versionOne} className='card'/>
          <CardSocials stylesTheme={stylesTheme.versionOne} className='card'/>
        </section>
        <section className='sec'>
        <CardLinguagens stylesTheme={stylesTheme.versionOne}className='card'/>
        </section>
    
      </main>

    </section>
  )
}

export default App
