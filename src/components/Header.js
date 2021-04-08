import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
// Only for ripple effect.
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/cards'>
                <IconButton>
                    <PersonIcon className="header__icon" fontSize = "large"/>
                </IconButton>
            </Link>


            <Link to='/home'>
                <img
                    className="header__logo"
                    src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
                    alt="Textosterone"/>
            </Link>

            <Link to='/chats'>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize = "large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
