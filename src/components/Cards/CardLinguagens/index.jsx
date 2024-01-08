import styles from './CardLinguagens.module.scss'


const CardLinguagens = ({ stylesTheme }) => {
  const tecnologias = {
    html: 'HTML',
    css: 'CSS',
    javaScript: 'JavaScript',
    node: 'Node.js',
    next: 'Next.js',
    react: 'React'
};

return (
    <div style={stylesTheme} className={styles.cardLinguagens}>
        <h3>Stacks</h3>
        {Object.keys(tecnologias).map((tecnologia, index) => (
            <div key={index} className={styles.tecnologia}>
                <ul>
                    <li className={styles.tecnologiaItem}> {tecnologias[tecnologia]}</li>
                </ul>
              
            </div>
        ))}
    </div>
);

};

export default CardLinguagens;
