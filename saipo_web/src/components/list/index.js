import React, { useEffect, useState } from "react"
import { styles } from "./styles"

import { API } from "../../global/api"

export const List = ({ allTasks }) => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(allTasks)
    }, [allTasks])

    const changeTaskStatus = (task) => {
        if (task.pendingCount === 0) {
            //alert("Essa tarefa já foi alterada mais de 2x")
            return false
        }

        task.complete = !task.complete

        API.put("/task", task)
            .then( response => {
                var refreshTasks = tasks

                refreshTasks = refreshTasks.map( item => {
                    if (item.id === task.id) {
                        return response.data
                    }

                    return item
                })

                setTasks(refreshTasks)
            })
            .catch( error => {
                console.log("Deu erro ao atualizar a tarefa", error)
            })
    }

    const handleItem = (task) => {
        return (
            <div style={ styles.task } key={ task.id }>
                <div style={ styles.taskData }>
                    { 
                        task.complete ? (
                            <input 
                                checked
                                style={ styles.checkbox } 
                                type="checkbox"
                                onChange={ () => changeTaskStatus(task) }
                            />
                        ) : (
                            <input 
                                style={ styles.checkbox } 
                                type="checkbox" 
                                onChange={ () => changeTaskStatus(task) }
                            />
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

        let sortByComplete = completeA === completeB ? 0 : completeB ? -1 : 1
        let sortByName = descriptionA === descriptionB ? 0 : descriptionA > descriptionB ? 1 : -1

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