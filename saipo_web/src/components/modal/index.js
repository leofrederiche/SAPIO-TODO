import React, { useEffect, useState } from "react"
import Modal from "react-modal"

import { styles } from "./styles"

export const CustomModal = ({ 
    modalOpen, 
    setModalOpen,
    modalLabel,
    modalStyle,
    mailSuggest,
    setLoading,
    setMail,
    sendData
}) => {
    return (
        <Modal 
            isOpen={ modalOpen }
            style={ styles.modal }
        >
            <h3>{ modalLabel }</h3>

            {
                modalStyle === "ok" ? (
                    <div style={ styles.modalAction } >
                        <button style={ styles.button } onClick={ () => {
                            setModalOpen(false)
                            setLoading(false)
                        }}>OK</button>
                    </div>
                ) : (
                    <div style={ styles.modalAction }>
                        <button 
                            style={ styles.button }
                            onClick={ () => { 
                                setMail(mailSuggest)
                                setModalOpen(false)
                                setLoading(false)
                                sendData({ currentMail: mailSuggest })                  
                            }}
                        >
                            Sim
                        </button>

                        <button 
                            style={ styles.buttonCancel }
                            onClick={ () => {
                                setModalOpen(false) 
                                setLoading(false)
                            }}
                        >
                            Não
                        </button>
                    </div>
                )
            }
        </Modal>
    )
}