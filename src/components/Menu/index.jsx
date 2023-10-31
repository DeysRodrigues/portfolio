
import tinycolor from 'tinycolor2';
import styles from './Menu.module.css';

const Menu = ({stylesTheme, backgroundColor}) => {
  
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
  <div className={styles.menu} style={adjustedStylesTheme}>
    
    <div className={styles.icon}>
    
    </div>

    <div className={styles.iconGalaxy}></div>
  </div>
  );
};

export default Menu;
