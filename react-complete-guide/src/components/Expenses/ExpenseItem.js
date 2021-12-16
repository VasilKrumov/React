import React, { useState } from 'react'
import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate'
import { Card } from '../UI/Card'

export const ExpenseItem = ({ date, title, amount }) => {
    const [stateTitle, setStateTitle] = useState(title)
    const clickHandler = () => {
        setStateTitle('cool')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{stateTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
