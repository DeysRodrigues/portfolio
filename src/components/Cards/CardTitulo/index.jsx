import styles from './CardTitulo.module.css';
import { RocketIcon } from '../../Icons';

const CardTitulo = ({ stylesTheme }) => {

    const corIcon = {
        color: stylesTheme.color
    };
    return (

        <div className={styles.cardTitulo} style={stylesTheme}>

            <div>
                <RocketIcon {...corIcon} />
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