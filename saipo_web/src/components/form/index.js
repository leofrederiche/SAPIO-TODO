import React from "react"
import { styles } from "./styles"

export const Form = () => {
    return (
        <div style={ styles.form }>
            <input style={ styles.input } type="text" placeholder="Descrição" />
            <input style={ styles.input } type="text" placeholder="Nome do responsável" />
            <input style={ styles.input } type="text" placeholder="E-mail do responsável" />

            <button style={ styles.button }>Enviar</button>
        </div>
    )
}