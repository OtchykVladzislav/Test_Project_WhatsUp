import dayjs from 'dayjs'
import classes from './style.module.css'

const YourChatElement = ({obj, date}) => {
    return(
        <div className={classes.block}>
            <div><span>{obj}</span><span className={classes.time}>{dayjs(date).format('HH:mm')}</span></div>
        </div>
    )
}

export default YourChatElement