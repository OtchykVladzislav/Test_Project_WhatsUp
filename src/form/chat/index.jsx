import { useRef, useEffect, useState } from 'react'
import Input from '../../UI/input'
import classes from './style.module.css'
import Button from '../../UI/button'
import YourChatElement from '../../utils/your_chat_element'
import PartnerChatElement from '../../utils/partner_chat_element'
import SendIcon from '@rsuite/icons/Send';
import { useFetching } from '../../hooks/useFetching'
import RequestList from '../../API/RequestsList'
import EmojiMenu from '../../UI/emoji_menu'

const Chat = ({data, chatId}) => {
    const [message, setMessage] = useState('')
    const [listMessage, setListMessage] = useState([])
    const [queId, setQueId] = useState(0)
    const [progressSend, setProgressSend] = useState(false)
    const refDiv = useRef(null)

    const [fetchSend, isSendLoading, sendError] = useFetching(async (obj) => {
        setProgressSend(true)
        await RequestList.send(data.idInstance, data.apiTokenInstance, JSON.stringify(obj))
        setListMessage([...listMessage, {type: 'my', message, time: new Date()}])
        setProgressSend(false)
    })

    const [fetchReceive, isReceiveLoading, receiveError] = useFetching(async () => {
        const receive = await RequestList.receive(data.idInstance, data.apiTokenInstance)
        if(receive.data.body && receive.data.body.idMessage != queId){
            setQueId(receive.data.body.idMessage)
            await RequestList.delete(data.idInstance, data.apiTokenInstance, receive.data.receiptId)
            let arr = listMessage
            arr.push({type: 'your', message: receive.data.body.messageData.textMessageData.textMessage, time: receive.data.body.timestamp})
            setListMessage([...arr])
        }
    })

    const scrollToBottom = () => {
        refDiv.current.scrollTo(0, refDiv.current.scrollHeight)
    }

    const send = () => {
        fetchSend({chatId, message})
        setMessage('')
    }

    useEffect(() => {
        scrollToBottom()
    }, [listMessage])

    useEffect(() => {
        const interval = setInterval(() => {
          if(!progressSend) fetchReceive()
        }, 2000);
        return () => clearInterval(interval);
    }, [progressSend]);

    return(
        <div className={classes.block}>
            <div className={classes.header}>
                <span>{'+' + chatId.split('@')[0]}</span>
            </div>
            <div ref={refDiv} className={classes.body}>
                {listMessage.map((e, i) => e.type == 'my' ? <YourChatElement key={i} obj={e.message} date={e.time}/> : <PartnerChatElement key={i} obj={e.message} date={e.time}/>)}
            </div>
            <div className={classes.footer}>
                <EmojiMenu message={message} setMessage={setMessage}/>
                <Input 
                    type='text'
                    value={message}
                    onChange={text => setMessage(text)}
                    placeholder={'Сообщение...'}
                />
                <Button onClick={send}><SendIcon/></Button>
            </div>
        </div>
    )
}

export default Chat