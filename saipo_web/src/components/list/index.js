import React, { useEffect, useState } from "react"
import { styles } from "./styles"

import { API } from "../../global/api"

export const List = ({ completed }) => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        API.get("/tasks")
        .then( response => {
            setTasks(response.data)
        })
        .catch( error => {
            console.log("Erro ao consultar os dados:", error)
        })
    }, [])

    const handleItem = (task) => {
        return (
            <div style={ styles.task } key={ task.id }>
                <div style={ styles.taskData }>
                    { 
                        task.complete ? (
                            <input style={ styles.checkbox } type="checkbox" checked />
                        ) : (
                            <input style={ styles.checkbox } type="checkbox" />
                        )
                    }
                    <label> { task.description } </label>
                </div>

                <label style={ styles.taskOwner }>{ task.owner }</label>
                <label style={ styles.taskMail }>{ task.mail }</label>
            </div>
        )
    }

    const sortTask = (a, b) => {
        let completeA = a.complete,
            completeB = b.complete,
            descriptionA = a.description.toUpperCase(),
            descriptionB = b.description.toUpperCase()

        let sortByComplete = completeA == completeB ? 0 : completeB ? -1 : 1
        let sortByName = descriptionA == descriptionB ? 0 : descriptionA > descriptionB ? 1 : -1

        return sortByComplete || sortByName
    }

    return (
        <div style={ styles.listContainer } >
            {
                tasks.length > 0 && tasks && tasks.sort(sortTask).map( task => (
                    handleItem(task)
                ))
            }
        </div>
    )
}