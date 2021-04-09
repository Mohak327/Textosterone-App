import React from "react"
import "./Chats.css"
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Aniket"
                message="Yo bro, kahan hai aaj kal?"
                timestamp="3 minutes ago"
                profilePic="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
            <Chat
                name="Akansha"
                message="Sending you a poem, padhke bata kaisi hai"
                timestamp="2 seconds ago"
                profilePic="https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            />
            <Chat
                name="Mohak"
                message="I really do..."
                timestamp="17 seconds ago"
                profilePic="https://images.unsplash.com/photo-1561813575-47e0e4c92380?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
            <Chat
                name="Rajat"
                message="MacBook 2021: M2X Chip is here! 🔥"
                timestamp="10 minutes ago"
                profilePic="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80"
            />
        </div>
    )
}

export default Chats
