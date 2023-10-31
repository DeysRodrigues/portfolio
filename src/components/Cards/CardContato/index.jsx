import styles from './CardContato.module.css'

const CardContato = ({ stylesTheme }) => {

    const stylesAncora = {
        border: `${stylesTheme.border}`
    }
    const ancoras = [
        "instagram",
        "twitter",
        "discord",
        "e-mail",
        "notion",
        "phone"
    ];

    return (

        <div className={styles.cardContato} style={stylesTheme}>

            {
                ancoras.map((ancora, index) => (

                    <a href="" key={index} className={styles.ancora} style={stylesAncora}>

                        {ancora}
                    </a>)
                )
            }
        </div>
    )
}

export default CardContato