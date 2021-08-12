import React, { useEffect, useState } from 'react';
import { styles } from './styles';

import { List } from "../../components/list"
import { Form } from "../../components/form"
import { API } from '../../global/api';

export const Home = () => {

    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        API.get("/tasks")
            .then( response => {
                setAllTasks(response.data)
            })
            .catch( error => {
                console.log("Erro ao consultar os dados:", error)
            })
    }

    return (
        <div style={ styles.main }>
            <div style={ styles.content }>
                <h1>TO-DO List</h1>
                <Form refreshTasks={ getData } />

                <List allTasks={ allTasks } />                
            </div>
        </div>
    )
}