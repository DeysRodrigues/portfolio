import styles from './CardTitulo.module.css';
import rocket from '/src/assets/icons/rocket.svg'

const CardTitulo = ({ stylesTheme }) => {


    return (

        <div className={styles.cardTitulo} style={stylesTheme}>

            <div>
            <img src={rocket} alt="Rocket Icon" />
            </div>
            <div>
                <h1>PORTFOLIO</h1>
                <p className={styles.text}>&lt;DevJunior/&gt;</p>
                <p className={styles.text}>Deys Rodrigues</p>
            </div>

        </div>
    )
}

export default CardTitulo