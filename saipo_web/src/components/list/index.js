import React, { useEffect, useState } from "react"
import { styles } from "./styles"

import { API } from "../../global/api"

const tasks = [
    {
        id: 1,
        description: "Code Challenge Saipo",
        owner: "Leonardo Frederiche",
        mail: "leofrederiche@gmail.com",
        complete: false,
        pendingCount: 0
    },

    {
        id: 2,
        description: "Start Saipo Project",
        owner: "Leonardo Frederiche",
        mail: "leofrederiche@gmail.com",
        complete: true,
        pendingCount: 2
    },

    {
        id: 3,
        description: "End Saipo Project",
        owner: "Leonardo Frederiche",
        mail: "leofrederiche@gmail.com",
        complete: false,
        pendingCount: 1
    },

    {
        id: 4,
        description: "Sleep",
        owner: "Leonardo Frederiche",
        mail: "leofrederiche@gmail.com",
        complete: false,
        pendingCount: 0
    },
]

export const List = ({ completed }) => {

    const [bdTasks, setTasks] = useState([])

    useEffect(() => {
        API.get("/tasks")
        .then( response => {
            console.log("Dados recebidos: ", response.data)
        })
        .catch( error => {
            console.log("Erro ao consultar os dados:", error)
        })
    }, [])

    const handleItem = (task) => {
        return (
            <div style={ styles.task }>
                <div style={ styles.taskData }>
                    { 
                        task.complete ? (
                            <input type="checkbox" checked />
                        ) : (
                            <input type="checkbox" />
                        )
                    }
                    <label> { task.description } </label>
                </div>

                <label style={ styles.taskOwner }>{ task.owner }</label>
                <label style={ styles.taskMail }>{ task.mail }</label>
            </div>
        )
    }

    return (
        <div style={ styles.listContainer } >
            {
                tasks.sort((a, b) => a.complete == true).map( task => (
                    handleItem(task)
                ))
            }
        </div>
    )
}