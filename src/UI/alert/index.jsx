import classes from './style.module.css'

const Alert = ({children, ...props}) => {
    return(
        <div className={classes.alert} {...props}>
            {children}
        </div>
    )
}

export default Alert