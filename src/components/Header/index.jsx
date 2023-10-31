import Menu from '../Menu';
import styles from './Header.module.css';

const Header = ({mudarCor, stylesTheme, backgroundColor}) => {


    return (
        <section className={styles.header}>
              <input  onChange={evento => mudarCor(evento.target.value)} type='color' className={styles.input} />
            <Menu stylesTheme={stylesTheme} backgroundColor={backgroundColor}/>
        </section>


    )
}

export default Header