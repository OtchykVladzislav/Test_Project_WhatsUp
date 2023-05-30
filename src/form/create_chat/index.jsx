import { useState } from "react"
import Alert from "../../UI/alert"
import Button from "../../UI/button"
import classes from "./style.module.css"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"

const CreateChat = ({data, callback}) => {
    const [tel, setTel] = useState('')
    const [error, setError] = useState(false)

    const send = () => {
        let str = tel
        str = str.substring(1)
        callback(str + '@c.us')
        setTel('')
        setError(false)
    }

    return(
        <div className={classes.block}>
            <h3>Создание чата</h3>
            {error && <Alert>Неверно ввели данные</Alert>}
            <PhoneInput
                style={{width: '100%', fontSize: 17, margin: 5}}
                type='tel'
                value={tel}
                onChange={text => setTel(text)}
                placeholder={'Номер телефона...'}
            />
            <Button onClick={send} disabled={!tel || !isValidPhoneNumber(tel)}>Создать чат</Button>
        </div>
    )
}

export default CreateChat