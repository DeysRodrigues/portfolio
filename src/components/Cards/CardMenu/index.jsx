import styles from './CardMenu.module.css'
import { SolIcon} from '../../Icons'

const CardMenu = ({ stylesTheme, mudarCor, valueColor }) => {

    return (

        <div className={styles.cardMenu} style={stylesTheme}>
    
            <input defaultValue="white" value={valueColor} onChange={evento => mudarCor(evento.target.value)} type='color' className={styles.input} />
              <span className = {styles.iconSol}>
                <SolIcon />
              </span>
              <div>

              </div>
              <div>
                
              </div>
           
        </div>
        
    )
}

export default CardMenu;

