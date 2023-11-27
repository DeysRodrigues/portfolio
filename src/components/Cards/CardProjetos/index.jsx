import styles from './CardProjetos.module.scss';

const CardProjetos = ({ titulo, tags, stylesTheme, iconProjeto }) => {

    //estilo para o botao "ver projetos"
    const stylesButton = {
        border: `${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }

    return (

        <div className={styles.cardProjetos} style={stylesTheme}>

            <h2>
                {titulo}
            </h2>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <div className={styles.two}>
                <button className={styles.btn} style={stylesButton}>Ver Projetos</button>

                <div> {iconProjeto} </div>
            </div>
        </div>
    )
}

export default CardProjetos