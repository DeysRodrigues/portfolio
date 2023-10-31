import styles from "./CardFinal.module.css"
import pdf from "./public/assets/simple-deysrodrigues.pdf"

const CardFinal = ({ stylesTheme }) => {

    return (
        <div className={styles.cardFinal} style={stylesTheme}>

            <a href={pdf}download="seu_arquivo.pdf">

                <button>
                    baixe meu curriculo em pdf
                </button>
            </a>

        </div>
    )
}
export default CardFinal;