import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({ onCloseCart }) => {
    return <div className={classes.backdrop} onClick={onCloseCart}></div>
}

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            return <div className={classes.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

export const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}
