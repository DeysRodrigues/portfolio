import styles from "./CardFinal.module.css"
import pdf from "/assets/simple-deysrodrigues.pdf"
import { DownloadIcon, PlanetIcon } from '../../Icons';
const CardFinal = ({ stylesTheme }) => {

    const stylesButton = {
        border: `${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }

    return (
        <div className={styles.cardFinal} style={stylesTheme}>

            <div className={styles.cards}>

                <div className={styles.cardCurso} style={stylesTheme}>
                    <a href="">Explorar</a>
                    <span>Cursos</span>

                </div>
                <div className={styles.cardCurso} style={stylesTheme}>
                    <a href="">Explorar</a>
                    <span>Formação</span>

                </div>

            </div>
            <div className={styles.two}>

                <a href={pdf} download="seu_arquivo.pdf">

                    <button className={styles.btnDownload} style={stylesButton}>
                        curriculo em PDF
                        <DownloadIcon></DownloadIcon>
                    </button>

                </a>

                <PlanetIcon className={styles.iconPlanet} />
            </div>
        </div>
    )
}
export default CardFinal;