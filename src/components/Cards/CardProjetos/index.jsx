import styles from './CardProjetos.module.css';

const CardProjetos = ({ titulo, tags, stylesTheme, iconProjeto}) => {

    const stylesButton = {
        border:`${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }
    return (
        <div className={styles.cardProjetos} style={stylesTheme}>

            <h3>
                {titulo}
            </h3>
            <div className={styles.tags}>
            {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <div className={styles.two}>
                <button className={styles.btn} style={stylesButton}>Ver Projetos</button>
        
                <div className={styles.img}> {iconProjeto} </div>
            </div>
            

        </div>
    )
}

export default CardProjetos