import {useEffect, useState} from "react";
import styles from './PeoplePage.modules.scss'
import {getApiResource} from '../../utils/network'
import {API_PEOPLE} from '../../constants/api'

export const PeoplePage = () => {
    const [people, setPeople] = useState(null);
    useState()

    const getResource = async (url) => {
        const res = await getApiResource(url)

        const peopleList = res.results.map(({name, url}) => {
            return {
                name,
                url
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
                    {people.map(({name, url}) => {
                        return <li key={name}>
                            {name}
                        </li>
                    })}
                </ul>
            ) : <h2>False</h2>
            }

        </>
    )
}