import React, { useState } from "react"
import { styles } from "./styles"

import { API } from "../../global/api"
import { MailBoxLayer, socketURL } from "../../global/mailBoxLayer"

export const Form = ({ refreshTasks }) => {
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState("")
    const [mail, setMail] = useState("")

    const SendData = async () => {

        const validate = await validateEmail()

        console.log("chegou o retorno: ", validate)

        if (!validate.valid) {
            alert("Sugestão de E-mail inserida.")
            setMail(validate.mail)
            return
        }

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

    const validateEmail = async () => {
        return await MailBoxLayer.get(`${socketURL}email=${mail}`)
            .then( response => {
                const { did_you_mean, format_valid, mx_found } = response.data

                if (format_valid && mx_found) {
                    return { valid: true, mail }
                } else {
                    return { valid: false, mail: did_you_mean }
                }
            })
            .catch( error => {
                console.log("Erro ao validar o E-mail", error)
                return { valid: false, mail: "Erro ao validar o E-mail" }
            })
    }

    return (
        <div style={ styles.form }>
            <input 
                value={ description }
                style={ styles.input }
                type="text" 
                placeholder="Descrição" 
                onChange={ (event) => setDescription(event.target.value) }
            />

            <input 
                value={ owner }
                style={ styles.input } 
                type="text" 
                placeholder="Nome do responsável" 
                onChange={ (event) => setOwner(event.target.value) }
            />

            <input 
                value={ mail }
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