
import './App.css'
import tinycolor from 'tinycolor2';
import React, { useState, useEffect } from 'react';
import { SateliteIcon, TelescopioIcon } from './components/Icons';

//cards
import CardTitulo from './components/Cards/CardTitulo';
import CardProjetos from './components/Cards/CardProjetos';
import CardContato from './components/Cards/CardContato';
import CardPerfil from './components/Cards/CardPerfil';
import CardSocials from './components/Cards/CardPdfButton';
import CardLinguagens from './components/Cards/CardLinguagens';
import CardFinal from './components/Cards/CardFinal';
import CardMenu from './components/Cards/CardMenu';

function App() {
 
  /*--- O estado windowWidth é atualizado dinamicamente em resposta ao redimensionamento da janela. 
  Essa abordagem é essencial para criar uma interface responsiva, permitindo a adaptação do layout,
   estilo e renderização de componentes de acordo com o tamanho da tela do navegador. ---*/

  // Inicializa o estado windowWidth com a largura atual da janela
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {

    // Atualiza o estado com a largura atual da janela
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adiciona um ouvinte de evento de redimensionamento à janela
    window.addEventListener('resize', handleResize);


    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Cor de fundo padrão

  //mudar cor do fundo

  const mudarCorFundo = (cor) => {

    setBackgroundColor(cor);
    document.body.style.backgroundColor = cor;
  }

  const stylesTheme = {

    versionOne: {
      borderRadius: '1.25rem',
      color: 'black'

    }
  };

  // Converte a cor de fundo para um objeto com propriedades r, g e b
  const color = tinycolor(backgroundColor).toRgb();

  // Define um limite para considerar as cores como escuras
  const threshold = 70 + 0 + 70; // Soma dos valores R, G e B de (82, 0, 0)

  // Soma dos valores R, G e B da cor de fundo
  const colorSum = color.r + color.g + color.b;

  // Verifica se a cor de fundo é escura e ajusta as cores de acordo
  const adjustedStylesTheme = colorSum <= threshold
    ? {
      ...stylesTheme.versionOne,
      color: 'white',       // Cor do texto
      border: '0.1rem solid #fff',
      // Cor da borda
    }
    : {
      ...stylesTheme.versionOne,
      color: 'black',       // Cor do texto quando a cor de fundo não é escura
      border: '0.1rem solid #000',

      // Cor da borda quando a cor de fundo não é escura
    };

  const corIcon = {
    color: adjustedStylesTheme.color
  };
  // ------------------------------------------
  return (

    <section>

      <main className='container'>
        <section className='sec-1'>
          {windowWidth < 700 && <CardMenu stylesTheme={adjustedStylesTheme} mudarCor={mudarCorFundo} className='card' valueColor={stylesTheme.color} />}
          <CardTitulo stylesTheme={adjustedStylesTheme} className='card' />
          {windowWidth < 700 && <CardPerfil stylesTheme={adjustedStylesTheme} className='card' />}

          <CardProjetos titulo="Profissionais" tags={['React', 'Parcerias', 'Grupos']} iconProjeto={<SateliteIcon {...corIcon} />} stylesTheme={adjustedStylesTheme} className='card' />
          <CardProjetos titulo="Pessoais" tags={['Criativos', 'Diversao', 'Canvas']} iconProjeto={<TelescopioIcon {...corIcon} />} stylesTheme={adjustedStylesTheme} className='card' />


        </section>
        <section className='sec-2'>
          {windowWidth >= 700 && <CardPerfil stylesTheme={adjustedStylesTheme} className='card' />}
          <CardContato stylesTheme={adjustedStylesTheme} className='card' />
          <CardSocials stylesTheme={adjustedStylesTheme} className='card' />
        </section>

        <section className='sec-3'>

          <div className='one'>
            <CardLinguagens stylesTheme={adjustedStylesTheme} className='card' />
            {windowWidth >= 700 && <CardMenu stylesTheme={adjustedStylesTheme} mudarCor={mudarCorFundo} className='card' valueColor={stylesTheme.color} />}

          </div>

          <CardFinal stylesTheme={adjustedStylesTheme} className='card' />
        </section>

      </main>

    </section>
  )
}

export default App
