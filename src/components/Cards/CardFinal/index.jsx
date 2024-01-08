import styles from "./CardFinal.module.scss"

const CardFinal = ({ stylesTheme }) => {

    const stylesButton = {
        border: `${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }

    return (
        <div className={styles.cardFinal} style={stylesTheme}>

            <div className={styles.cards}>

                <div className={styles.cardCurso} style={stylesTheme}>
               
                    <h3>Cursos</h3>
                    <a href="">Explorar</a>

                </div>
                <div className={styles.cardCurso} style={stylesTheme}>
                
                    <h3>Formação</h3>
                    <a href="">Explorar</a>

                </div>

            </div>

        </div>
    )
}
export default CardFinal;