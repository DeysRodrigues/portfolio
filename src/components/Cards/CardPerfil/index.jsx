import styles from './CardPerfil.module.css'
import fotoDeys from '/src/assets/fotos/eu-preto-branco.jpg'
import { AstronautIcon } from '../../Icons';

const CardPerfil = ({ stylesTheme }) => {

    const imageStyle = {
        border: `${stylesTheme.border}` // Aplicando a cor da borda da prop

    };
    const corIcon = {
        color: stylesTheme.color
    };
    const btnColor = {

        color: `${stylesTheme.color}`
    }
    return (

        <div className={styles.cardPerfil} style={stylesTheme}>
            <div className={styles.one}>
                <img src={fotoDeys} alt="foto de Deys Rodrigues" className={styles.imagem} style={imageStyle} />
            </div>



            <div className={styles.two} >

                <AstronautIcon {...corIcon} />
                <button className={styles.btnsobre} style={btnColor}>sobre</button>
            </div>

        </div>
    )
}

export default CardPerfil;