import React from 'react'
import classes from './Input.module.css'

export const Input = React.forwardRef(({ label, input }, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} ref={ref} />
        </div>
    )
})
