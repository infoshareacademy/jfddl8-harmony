import React from 'react'
import AppBarMUI from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const AppBar = (props) => (
    <div>
         <AppBarMUI position="static">
        <Toolbar>
          <IconButton onClick={props.toggleSideBar}
          edge="start" 
          color="inherit" 
          aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBarMUI>
    </div>
)

export default AppBar 