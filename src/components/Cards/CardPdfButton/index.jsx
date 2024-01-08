import styles from './CardPdfButton.module.scss';
import { DownloadIcon, PlanetIcon } from '../../Icons';

const CardPdfButton = ({ stylesTheme }) => {

    const stylesButton = {
        border: `${stylesTheme.border}`,
        color: `${stylesTheme.color}`
    }

  
    return (
        <div className={styles.cardsSocial} style={stylesTheme}>
            <a href='#'>

                <button className={styles.btnDownload} style={stylesButton}>
                    curriculo em PDF
                    <DownloadIcon color={stylesTheme.color}/>
                </button>

            </a>
            <PlanetIcon color={stylesTheme.color}/>
        </div>
    );
};

export default CardPdfButton;
