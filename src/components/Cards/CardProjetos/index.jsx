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
                    <a href="#" className={styles.tag}>
                         <span key={index} >{tag}</span>
                    </a>
                   
                ))}
            </div>

            <div className={styles.two}>
                <a href="https://github.com/DeysRodrigues?tab=repositories" target="_blank">
                <button className={styles.btn} style={stylesButton}>Ver Projetos</button>
                </a>
              

                <div> {iconProjeto} </div>
            </div>
        </div>
    )
}

export default CardProjetos