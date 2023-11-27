import styles from './CardContato.module.css'

const CardContato = ({ stylesTheme }) => {

    const stylesAncora = {
        border: `${stylesTheme.border}`
    }
    const ancoras = [
        {
            title: 'linkedin',
            link: 'https://www.linkedin.com/in/deys-rodrigues/',

        },

        {
            title: 'github',
            link: 'https://github.com/DeysRodrigues',

        },
        {
            title: 'behance',
            link: 'https://www.behance.net/venushim',

        },
        {
            title: 'email',
            link: 'mailto:rodriguesdeys@gmail.com',

        },

        {
            title: 'instagram',
            link: 'https://www.instagram.com/venushimdev/',

        },
        {
            title: 'twitter',
            link: '#',

        },
    ];

    return (

        <div className={styles.cardContato} style={stylesTheme}>

            {
                ancoras.map((ancora, index) => (

                    <a href={ancora.link} key={index} className={styles.ancora} style={stylesAncora} target='_blank'>

                        {ancora.title}
                    </a>)
                )
            }
        </div>
    )
}

export default CardContato