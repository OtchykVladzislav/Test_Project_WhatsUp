import classes from './style.module.css'

const Input = ({value, onChange, ...props}) => {
    return(
        <div className={classes.block_input}>
            <input className={classes.input} value={value} onChange={e => onChange(e.target.value)} {...props}/>
            {value && <p className={classes.cross} onClick={() => onChange('')}>&#10539;</p>}
        </div>
    )
}

export default Input