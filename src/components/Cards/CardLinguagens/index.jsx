import styles from './CardLinguagens.module.css'
import html from '/src/assets/icons/html.svg'; 
import css from '/src/assets/icons/css.svg'; 
import js from '/src/assets/icons/js.svg'; 
import node from '/src/assets/icons/node.svg'; 
import angular from '/src/assets/icons/angular.svg'; 
import react from '/src/assets/icons/react.svg'; 

const CardLinguagens = ({ stylesTheme }) => {
  const linguagens = {
    html: html, 
    css: css,
    javascript: js,
    node: node,
    
  };

  return (
    <div style={stylesTheme} className={styles.cardLinguagens}>
      {Object.keys(linguagens).map((linguagem, index) => (
        <div key={index}>
          <img src={linguagens[linguagem]} alt={linguagem} />
       
        </div>
      ))}
      <div className={styles.two}>
        <img src={angular} alt="" />
        <img src={react} alt="" />
      </div>
    </div>
  );
};

export default CardLinguagens;
