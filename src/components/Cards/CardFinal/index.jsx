import styles from "./CardFinal.module.css"
import pdf from "/assets/simple-deysrodrigues.pdf"
import planet from "/src/assets/icons/download.svg"
const CardFinal = ({ stylesTheme }) => {

    const stylesButton = {
        border:`${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }
    return (
        <div className={styles.cardFinal} style={stylesTheme}>

            <a href={pdf}download="seu_arquivo.pdf">

                <button className={styles.btnDownload} style={stylesButton}>
                 BAIXAR PDF
                    <img src={planet} alt="sss " />
                </button>
                <button className={styles.btnDownload} style={stylesButton}>
                 BAIXAR PDF
                    <img src={planet} alt="sss " />
                </button>
           
            </a>

        </div>
    )
}
export default CardFinal;