import React, { useState } from 'react'
import { Wrapper } from '../Helpers/Wrapper'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { ErrorModal } from '../UI/ErrorModal'
import classes from './AddUser.module.css'

export const AddUser = (props) => {
    const [enteredUsername, setEntredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState({
        title: '',
        message: '',
    })

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid username',
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age',
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredAge('')
        setEntredUsername('')
    }

    const usernameChangeHandler = (event) => {
        setEntredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError({ title: '', message: '' })
    }
    return (
        <Wrapper>
            {error.title !== '' && (
                <ErrorModal title={error.title} message={error.message} onHandleErorr={errorHandler} />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}
