import styles from './ContainerPerfil.module.css';
import tinycolor from 'tinycolor2';
import CardPerfil from '../Cards/CardPerfil';
import CardContato from '../Cards/CardContato';
import CardSocials from '../Cards/CardSocials';


const ContainerPerfil = ({stylesTheme, backgroundColor}) => {

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
    : stylesTheme;

    return (

        <section className={styles.containerPerfil}>
            <CardPerfil stylesTheme = {adjustedStylesTheme}/>
            <CardContato stylesTheme = {adjustedStylesTheme}/>
            <CardSocials stylesTheme = {adjustedStylesTheme}/>
        </section>
    );
}

export default ContainerPerfil