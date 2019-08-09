import React from 'react'
import { Link } from 'react-router-dom'

// import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {ListItem} from './SideBar.styled'

import MenuIcon from '@material-ui/icons/Menu'
const styles = {
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}

const SideBarItem = (props) => (
  <Link
    to={props.to}
    style={styles.link}
  >
    <ListItem button={true}>
      <ListItemIcon>
        <MenuIcon />
      </ListItemIcon>

      <ListItemText
        primary={props.label}
      />
    </ListItem>
  </Link>
)

export default SideBarItem 