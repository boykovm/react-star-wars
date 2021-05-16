import styles from './ErrorMessage.module.scss'

export const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side of the force has won. <br/>
                We can not display data. <br/>
                Come back when we fix everything
            </p>
        </>
    )
}