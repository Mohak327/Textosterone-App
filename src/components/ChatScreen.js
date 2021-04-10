import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import SendIcon from '@material-ui/icons/Send'
import './ChatScreen.css'
import IconButton from '@material-ui/core/IconButton'

function ChatScreen() {
    const [input, setInput] = useState('')

    const [messages, setMessages] = useState([
        {   //Sender's message
            name: 'Akansha',
            image: 'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            message: 'Moki, you there?'
        },
        {   //Your message
            message: 'Anuuuu, kya haal chaal? ❤'
        },
        {   //Sender's message
            name: 'Akansha',
            image: 'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            message: 'Sending you a poem, padhke bata kaisi hai'
        },
    ])

    const handleSend = e => {
        //Do this else the site will refresh each time you preess Enter.
        e.preventDefault()

        // Send message 
        setMessages([...messages, {message: input}])
        setInput('')
    }

    return (
        <div className='ChatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH AKANSHA ON 01/10/2020</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                        className='chatScreen__image'
                        alt={message.name}
                        src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )

            ))}

            <div>
                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='chatScreen__inputField'
                        type="text"
                        placeholder="Type a message...">
                    </input>
                    <button
                        type='submit'
                        onClick={handleSend}
                        className="chatScreen__button">
                        <IconButton className='chatScreen__inputButton'>
                            <SendIcon fontSize='large'/>
                        </IconButton>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
