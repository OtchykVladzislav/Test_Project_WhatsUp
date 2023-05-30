import 'rsuite/dist/rsuite.min.css';
import classes from './App.module.css'
import AuthLogin from './form/auth';
import { useState } from 'react';
import CreateChat from './form/create_chat';
import Chat from './form/chat';
import 'react-phone-number-input/style.css'

function App() {
  const [data, setData] = useState({})
  const [chatId, setChatId] = useState('')


  const switchBlocks = () => {
    if(!data.idInstance && !data.apiTokenInstance) return <AuthLogin callback={(obj) => setData({...obj})}/>
    if(data.idInstance && data.apiTokenInstance && !chatId) return <CreateChat data={data} callback={setChatId}/>
    return <Chat data={data} chatId={chatId}/>
  }


  return (
    <div className={classes.main}>
      <img className={classes.img} src="whatsup.jpg" alt="Лого" />
      {switchBlocks()}
    </div>
  )
}

export default App
