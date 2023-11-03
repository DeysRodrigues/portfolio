import styles from './CardMenu.module.css'

const CardMenu = ({ stylesTheme }) => {

    return (
        <div className={styles.cardMenu} style={stylesTheme}>
              <input  onChange={evento => mudarCor(evento.target.value)} type='color' className={styles.input} />
        </div>
    )
}

export default CardMenu