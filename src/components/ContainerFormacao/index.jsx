import CardLinguagens from "../Cards/CardLinguagens"
import styles from './ContainerFormacao.module.css'

const ContainerFormacao = ({stylesTheme}) => {

    return (
        <section className={styles.containerFormacao}>
            <CardLinguagens stylesTheme={stylesTheme}/>
        </section>
    )
}

export default ContainerFormacao