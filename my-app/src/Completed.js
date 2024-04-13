import styles from './Completed.module.css';
import React from 'react';
import Todo from './Todo'


const Completed = () => {

    return (
        <>
            <Todo text={'Section under cunstruction!!!'} isChecked={true} style={{textDecoration: 'line-through'}}/>
        </>
    )
}

export default Completed;