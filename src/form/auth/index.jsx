import { useState } from "react"
import Input from "../../UI/input"
import Button from "../../UI/button"
import classes from './style.module.css'
import Alert from "../../UI/alert"
import RequestList from "../../API/RequestsList"
import { useFetching } from "../../hooks/useFetching"

const AuthLogin = ({callback}) => {
    const [form, setForm] = useState({idInstance: '', apiTokenInstance: ''})

    const [fetchSend, isSendLoading, sendError] = useFetching(async () => {
       const auth = await RequestList.auth(form.idInstance, form.apiTokenInstance)
       if(auth.data.stateInstance == 'authorized'){
            callback(form)
            setForm({idInstance: '', apiTokenInstance: ''})
        }
    })

    return(
        <div className={classes.block}>
            <h3>Авторизация</h3>
            {sendError && <Alert>Аккаунта не авторизован</Alert>}
            <Input
                type='text'
                value={form.idInstance}
                onChange={idInstance => setForm({...form, idInstance})}
                placeholder={'idInstance...'}
            />
            <Input 
                type='text'
                value={form.apiTokenInstance}
                onChange={apiTokenInstance => setForm({...form, apiTokenInstance})}
                placeholder={'apiTokenInstance...'}
            />
            <Button onClick={fetchSend} disabled={!form.idInstance || !form.apiTokenInstance}>Отправить</Button>
        </div>
    )
}

export default AuthLogin