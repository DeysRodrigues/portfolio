import styles from './CardSocials.module.css';
import { BehanceIcon, LinkedinIcon, GithubIcon } from '../../Icons';

const CardSocials = ({stylesTheme}) => {
    
    const corIcon = {
        color: stylesTheme.color
    };

    const socials = [
        {

            link: 'https://github.com/skskks',
            backgroundImage: <LinkedinIcon {...corIcon}/>,
        },

        {

            link: 'https://github.com/skskks',
            backgroundImage: <GithubIcon {...corIcon}/>,
        },
        {

            link: 'https://github.com/skskks',
            backgroundImage: <BehanceIcon {...corIcon}/>,
        },
    ];

    const stylesSocial = {

        border: `${stylesTheme.border}`,
        
    }
    return (
        <div className={styles.cardsSocial} style={stylesTheme}>
            {socials.map((social, index) => (
                <div key={index} className={styles.cardSocial} style={stylesSocial}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer" >
                        <div className={styles.social}>{social.backgroundImage}</div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CardSocials;
