import React, { useState } from "react"
import { styles } from "./styles"

import { API } from "../../global/api"

export const Form = ({ refreshTasks }) => {
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState("")
    const [mail, setMail] = useState("")

    const SendData = () => {
        const newTask = {
            description,
            owner,
            mail
        }

        API.post("/task", newTask)
        .then( response => {
            alert("Dados gravados com sucesso!")
            refreshTasks()
        })
        .catch( error => {
            alert("Erro ao gravar os dados: " + error.message)
        })
    }

    return (
        <div style={ styles.form }>
            <input 
                style={ styles.input } 
                type="text" 
                placeholder="Descrição" 
                onChange={ (event) => setDescription(event.target.value) }
            />

            <input 
                style={ styles.input } 
                type="text" 
                placeholder="Nome do responsável" 
                onChange={ (event) => setOwner(event.target.value) }
            />

            <input 
                style={ styles.input } 
                type="text" 
                placeholder="E-mail do responsável" 
                onChange={ (event) => setMail(event.target.value) }
            />

            <button 
                style={ styles.button }
                onClick={ SendData }
            >
                Enviar
            </button>
        </div>
    )
}