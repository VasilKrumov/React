import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Button'
import { Card } from './Card'

import classes from './ErrorModal.module.css'

export const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

export const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <section className={classes.content}>
                <p>{props.message}</p>
            </section>
            <footer className={classes.actions}>
                <Button onClick={props.onHandleErorr}>Ok</Button>
            </footer>
        </Card>
    )
}

export const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onHandleErorr={props.onHandleErorr} />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}
