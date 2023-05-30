import classes from './style.module.css'
import dayjs from 'dayjs'

const PartnerChatElement = ({obj, date}) => {
    return(
        <div className={classes.block}>
            <div><span>{obj}</span><span className={classes.time}>{dayjs(date).format('HH:mm')}</span></div>
        </div>
    )
}

export default PartnerChatElement