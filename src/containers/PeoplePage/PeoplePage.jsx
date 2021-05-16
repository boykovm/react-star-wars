import {useEffect, useState} from "react";
import styles from './PeoplePage.modules.scss'
import {getApiResource} from '../../utils/network'
import {API_PEOPLE} from '../../constants/api'
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import {PeopleList} from "../../components/PeoplePage/PeopleList/PeopleList";

export const PeoplePage = () => {
    const [people, setPeople] = useState(null);
    useState()

    const getResource = async (url) => {
        const res = await getApiResource(url)

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

        console.log(peopleList)
    }


    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            {people ? <PeopleList people={people} /> : <h2>False</h2>
            }

        </>
    )
}