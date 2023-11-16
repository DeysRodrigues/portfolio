import styles from './CardMenu.module.css'
import { SolIcon, GithubMenuIcon } from '../../Icons'

const CardMenu = ({ stylesTheme, mudarCor, valueColor }) => {

  return (

    <div className={styles.cardMenu} style={stylesTheme}>
      <div>
        <input defaultValue="white" value={valueColor} onChange={evento => mudarCor(evento.target.value)} type='color' className={styles.input} />
        <span className={styles.iconSol}>
          <SolIcon />
        </span>
      </div>

      <div>
        <a href="">
        <GithubMenuIcon></GithubMenuIcon>
        </a>
        
      </div>
      <div>

      </div>

    </div>

  )
}

export default CardMenu;

