import styles from './CardMenu.module.css'
import { SolIcon, GithubMenuIcon, CoffeIcon } from '../../Icons'

const CardMenu = ({ stylesTheme, mudarCor, valueColor }) => {

  return (

    <div className={styles.cardMenu} style={stylesTheme}>
      <div>
        <input defaultValue="white" value={valueColor} onChange={evento => mudarCor(evento.target.value)} type='color' className={styles.input} />
        <span className={styles.iconSol}>
          <SolIcon />
        </span>
      </div>

      <div className={styles.two} >

        <a href="" className={styles.githubIcon}>
        <GithubMenuIcon color='#7739A7'/>
        </a>
        
      </div>
      <div>
      <a href="" className={styles.githubIcon}>
        <CoffeIcon color='#7739A7'/>
        </a>
        
      </div>

    </div>

  )
}

export default CardMenu;

