import {useEffect, useState} from "react";
import styles from './PeoplePage.modules.scss'
import {getApiResource} from '../../utils/network'
import {API_PEOPLE} from '../../constants/api'
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";

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
            {people ? (
                <ul>
                    {people.map(({name, id, img}) => {
                        return <li key={id}>
                            <img src={img} alt={name} />
                            <p>{name}</p>
                        </li>
                    })}
                </ul>
            ) : <h2>False</h2>
            }

        </>
    )
}