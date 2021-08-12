import React, { useEffect, useState } from 'react';
import { styles } from './styles';

import { List } from "../../components/list"
import { Form } from "../../components/form"
import { API } from '../../global/api';

export const Home = () => {

    const [allTasks, setAllTasks] = useState([])
    const [listComponent, setListComponent] = useState(<></>)

    useEffect(() => {
        setListComponent(<List allTasks={ allTasks } />)
    },[allTasks])

    useEffect(() => {
        API.get("/tasks")
            .then( response => {
                setAllTasks(response.data)
            })
            .catch( error => {
                console.log("Erro ao consultar os dados:", error)
            })
    }, [])

    const updateList = () => {
        setListComponent(<List allTasks={ allTasks } />)
    }

    const includeTask = (task) => {
        var tasks = allTasks
        tasks.push(task)
        console.log("update All Tasks", tasks)
        updateList()
        setAllTasks(tasks)
    }

    return (
        <div style={ styles.main }>
            <div style={ styles.content }>
                <h1>TO-DO List</h1>
                <Form includeTask={ includeTask } />
                
                { listComponent }
                
            </div>
        </div>
    )
}