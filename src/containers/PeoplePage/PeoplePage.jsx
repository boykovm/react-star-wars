import {useEffect, useState} from "react";
import PropTypes from 'prop-types'

import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getApiResource} from '../../utils/network'
import {API_PEOPLE} from '../../constants/api'
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import {PeopleList} from "../../components/PeoplePage/PeopleList/PeopleList";

// eslint-disable-next-line
import styles from './PeoplePage.modules.scss'
const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    name,
                    id,
                    img
                }
            })

            setPeople(peopleList)

            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }


    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)