import PropTypes from 'prop-types'

import styles from './PeopleList.module.scss'

export const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({name, id, img}) => {
                return <li className={styles.list__item} key={id}>
                    <a href="/">
                        <img className={styles.person__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </a>
                </li>
            })}
        </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}