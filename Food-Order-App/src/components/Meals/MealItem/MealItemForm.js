import React from 'react'
import { Input } from '../../UI/Input'
import classes from './MealItemForm.module.css'

export const MealItemForm = ({ id }) => {
    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id: 'amount_' + id, // this changed!
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    )
}
