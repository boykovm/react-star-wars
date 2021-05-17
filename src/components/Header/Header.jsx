import {NavLink} from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.container} >
            <ul className={styles.list__container}>
                <li className={styles.list__item}><NavLink to='/' exact>Home</NavLink></li>
                <li className={styles.list__item}><NavLink to='/people/?page=1' exact>People</NavLink></li>
                <li className={styles.list__item}><NavLink to='/not-found' exact>Not Found</NavLink></li>
            </ul>
        </div>
    )
}
