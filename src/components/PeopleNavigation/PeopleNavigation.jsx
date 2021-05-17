import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import styles from './PeopleNavigation.module.scss'

const PeopleNavigation = ({
                              getResource,
                              prevPage,
                              nextPage,
                              counterPage
                          }) => {
    const handleChangePrevious = () => {
        getResource(prevPage)
    }

    const handleChangeNext = () => {
        getResource(nextPage)
    }

    return (
        <div>
            <Link to={`/people/?page=${counterPage-1}`}>
                <button
                    onClick={handleChangePrevious}
                    className={styles.btn}
                    disabled={!prevPage}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage+1}`}>
                <button
                    onClick={handleChangeNext}
                    className={styles.btn}
                    disabled={!nextPage}
                >
                    Next
                </button>
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation