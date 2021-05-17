import { useLocation } from 'react-router-dom'
import img from './img/notFound.png'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
    let location = useLocation()

    return (
        <>
            <img className={styles.image} src={img} alt="Not Found" />
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}