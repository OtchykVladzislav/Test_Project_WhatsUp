import classes from './style.module.css'

const Button = ({children, disabled,...props}) => {
    return(
        <button className={disabled ? classes.disabled : classes.button} disabled={disabled} {...props}>{children}</button>
    )
}

export default Button