import styles from './CardMenu.module.css'
import { ColorMenuIcon, GithubMenuIcon, CoffeIcon } from '../../Icons'

const CardMenu = ({ stylesTheme, mudarCor, valueColor }) => {

  return (

    <div className={styles.cardMenu} style={stylesTheme}>
      <div>
        <input defaultValue="red" value={valueColor} onChange={evento => mudarCor(evento.target.value)} type='color' className={styles.input} title="Clique para mudar a cor de fundo :)"/>
        <span className={styles.iconColorMenu}>
          <ColorMenuIcon />
        </span>
      </div>

      <div className={styles.two} >

        <a href="" className={styles.menuIcon}>
        <GithubMenuIcon color='#7739A7'/>
        </a>
        
      </div>
      <div>
      <a href="" className={styles.menuIcon}>
        <CoffeIcon color='#7739A7'/>
        </a>
        
      </div>

    </div>

  )
}

export default CardMenu;

