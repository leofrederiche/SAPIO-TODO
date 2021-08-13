import React, { useState } from "react"
import { styles } from "./styles"

import { API } from "../../global/api"
import { MailBoxLayer, socketURL } from "../../global/mailBoxLayer"
import { CustomModal } from "../modal"

export const Form = ({ refreshTasks }) => {
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState("")
    const [mail, setMail] = useState("")
    const [mailSuggest, setMailSuggest] = useState("")
    const [loading, setLoading] = useState(false)

    const [modalOpen, setModalOpen] = useState(false)
    const [modalLabel, setModalLabel] = useState("")
    const [modalStyle, setModalStyle] = useState("ok") // ok || select

    const showModal = ({ label, style }) => {
        setModalOpen(true)
        setModalLabel(label)
        setModalStyle(style)
    }

    const sendData = async ({ currentMail = null }) => {
        setLoading(true)

        if (currentMail === null){
            currentMail = mail
        }
        
        const validMail = await validateEmail({ currentMail })

        if (validMail.mail == "error"){
            showModal({ label: "E-mail inválido.", style: "ok" })
            return
        }

        if (!validMail.valid) {
            setMailSuggest(validMail.mail)

            showModal({
                label: `Você quis dizer ${validMail.mail}?`,
                style: "option",
            })

            return
        }

        const newTask = {
            description,
            owner,
            mail: currentMail
        }

        API.post("/task", newTask)
            .then( response => {
                showModal({ label: "Tarefa registrada ;)", style: "ok"})
                refreshTasks()
                setLoading(false)
            })
            .catch( error => {
                alert("Erro ao gravar os dados: " + error.message)
                setLoading(false)
            })
    }

    const validateEmail = async ({ currentMail }) => {
        return await MailBoxLayer.get(`${socketURL}email=${currentMail}`)
            .then( response => {
                const { did_you_mean, format_valid, mx_found, success } = response.data

                if (format_valid && mx_found) {
                    return { valid: true, mail: currentMail }
                } else {
                    if (success === false){
                        return { valid: false, mail: "error" }
                    }
                    return { valid: false, mail: did_you_mean}
                }
            })
            .catch( error => {
                console.log("Erro ao validar o E-mail", error)
                return { valid: false, mail: currentMail }
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
                onClick={ sendData }
                disabled={ loading }
            >
                { loading ? "Aguarde.." : "Enviar"  }
            </button>


            <CustomModal 
                modalOpen={ modalOpen }
                setModalOpen={ setModalOpen }
                modalLabel={ modalLabel }
                modalStyle={ modalStyle }
                mailSuggest={ mailSuggest }
                setMail={ setMail }
                setLoading={ setLoading }
                sendData={ sendData }
            />
        </div>
    )
}