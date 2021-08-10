import React from 'react';
import { styles } from './styles';

import { List } from "../../components/list"
import { Form } from "../../components/form"

export const Home = () => {
    return (
        <div style={ styles.main }>
            <div style={ styles.content }>
                <h1>TO-DO List</h1>
                <Form />

                <List completed={ false } />
            </div>
        </div>
    )
}