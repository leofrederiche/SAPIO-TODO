import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import { styles } from "./styles"

import { API } from "../../global/api"
import { MailBoxLayer, socketURL } from "../../global/mailBoxLayer"

export const Form = ({ refreshTasks }) => {
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState("")
    const [mail, setMail] = useState("")
    const [mailSuggest, setMailSuggest] = useState("")

    const [modalOpen, setModalOpen] = useState(false)
    const [modalLabel, setModalLabel] = useState("")
    const [modalStyle, setModalStyle] = useState("ok") // ok || select

    const showModal = ({ label, style, action }) => {
        setModalOpen(true)
        setModalLabel(label)
        setModalStyle(style)
    }

    const sendData = async () => {

        const validMail = await validateEmail()

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
                    return { valid: false, mail: did_you_mean}
                }
            })
            .catch( error => {
                console.log("Erro ao validar o E-mail", error)
                // setMailSuggest(mail)
                return { valid: false, mail }
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
            >
                Enviar
            </button>


            <Modal 
                isOpen={ modalOpen }
                style={ styles.modal }
            >
                <h3>{ modalLabel }</h3>

                {
                    modalStyle === "ok" ? (
                        <div>
                            <button onClick={ () => setModalOpen(false) }>OK</button>
                        </div>
                    ) : (
                        <div>
                            <button 
                                onClick={ () => { 
                                    setMail(mailSuggest)
                                    setModalOpen(false)
                                }}
                            >
                                Sim
                            </button>

                            <button onClick={ () => setModalOpen(false) }>Não</button>
                        </div>
                    )
                }
            </Modal>
        </div>
    )
}