import { CartIcon } from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'

export const HeaderCardButton = ({ onClick }) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}
