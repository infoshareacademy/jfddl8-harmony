import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBar as AppBarStyled, Logo as IconLogo } from './AppBar.styled'
import { FacebookShareButton, FacebookIcon } from 'react-share'
import LogoPic from '../../img/logopoziomprzezroczystetlo.png'


const AppBar = (props) => (
  <div>
    <AppBarStyled position="static" >
      <Toolbar >
        <IconLogo>
          <img src={LogoPic} alt={''} />
        </IconLogo>
        <FacebookShareButton url={'http://app.move-your-fit.jfddl8.is-academy.pl/'}>
          <FacebookIcon />
        </FacebookShareButton>
      </Toolbar>
    </AppBarStyled>
  </div>
)

export default AppBar