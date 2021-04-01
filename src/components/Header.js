import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
// Only for ripple effect.
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize = "large"/>
            </IconButton>

                <img
                    className="header__logo"
                    src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
                    alt="Textosterone"/>

            <IconButton>
                <ForumIcon className="header__icon" fontSize = "large"/>
            </IconButton>
        </div>
    )
}

export default Header
