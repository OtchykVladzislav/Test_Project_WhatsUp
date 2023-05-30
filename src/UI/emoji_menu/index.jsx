import { Dropdown } from "rsuite"
import classes from './style.module.css'

const EmojiMenu = ({message, setMessage}) => {
    return(
        <Dropdown className={classes.menu} title="😀" noCaret>
            <Dropdown.Item onClick={() => {setMessage(message + '😀')}}>😀</Dropdown.Item>
            <Dropdown.Item onClick={() => {setMessage(message + '🥰')}}>🥰</Dropdown.Item>
            <Dropdown.Item onClick={() => {setMessage(message + '😘')}}>😘</Dropdown.Item>
            <Dropdown.Item onClick={() => {setMessage(message + '😂')}}>😂</Dropdown.Item>
            <Dropdown.Item onClick={() => {setMessage(message + '😡')}}>😡</Dropdown.Item>
            <Dropdown.Item onClick={() => {setMessage(message + '👍')}}>👍</Dropdown.Item>
            <Dropdown.Item onClick={() => {setMessage(message + '💩')}}>💩</Dropdown.Item>
        </Dropdown>
    )
}

export default EmojiMenu