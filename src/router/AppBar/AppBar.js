import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { AppBar as AppBarStyled, Logo as IconLogo } from './AppBar.styled'
import LogoPic from '../../img/logopoziomprzezroczystetlo.png'


const AppBar = (props) => (
  <div>
    <AppBarStyled position="static" >
      <Toolbar >
        <IconLogo>
          <img src={LogoPic} />
        </IconLogo>
      </Toolbar>
    </AppBarStyled>
  </div>
)

export default AppBar