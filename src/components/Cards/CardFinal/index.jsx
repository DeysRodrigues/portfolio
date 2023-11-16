import styles from "./CardFinal.module.css"
import pdf from "/assets/simple-deysrodrigues.pdf"
import planet from "/src/assets/icons/download.svg"
import arrow from "/src/assets/icons/arrow.svg"
const CardFinal = ({ stylesTheme }) => {

    const stylesButton = {
        border: `${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }
    
    return (
        <div className={styles.cardFinal} style={stylesTheme}>

            <div className={styles.cards}>

                <div className={styles.cardCurso}>
                    <span>Cursos</span>
                    <a href="">ver tudo</a>
                </div>
                <div className={styles.cardCurso}>
                    <span>Formacao </span>
                    <a href="">ver tudo</a>
                </div>

            </div>

            <a href={pdf} download="seu_arquivo.pdf">

                <button className={styles.btnDownload} style={stylesButton}>
                    curriculo em PDF
                    <img src={planet} alt="sss " />
                </button>
              <a href=""> <img src={arrow} alt="" /></a>
                 

            </a>
        </div>
    )
}
export default CardFinal;