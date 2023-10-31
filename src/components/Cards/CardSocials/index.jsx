import styles from './CardSocials.module.css';
import github from '/src/assets/icons/github.svg';
import linkedin from '/src/assets/icons/linkedin.svg';
import behance from '/src/assets/icons/behance.svg';

const CardSocials = ({stylesTheme}) => {
    const socials = [
        {

            link: 'https://github.com/skskks',
            backgroundImage: `url(${github})`,
        },

        {

            link: 'https://github.com/skskks',
            backgroundImage: `url(${linkedin})`,
        },
        {

            link: 'https://github.com/skskks',
            backgroundImage: `url(${behance})`,
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
                        <div style={{ backgroundImage: social.backgroundImage }} className={styles.social}></div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CardSocials;
