import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { Drawer, InnerDrawer} from './SideBar.styled'
import SideBarItem from './SideBarItem'


class SideBar extends React.Component {
  render() {
    return (
      <Drawer
        variant="persistent"
        open 
        onClose={this.props.toggleSideBar}
        isOpen = {this.props.isSideBarOpen}
  
      >
        <InnerDrawer>
        <IconButton onClick={this.props.handlerOnClick}
          edge="start"
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
          <SideBarItem to={'/home'} label={'Home'} />
          <SideBarItem to={'/my-profile'} label={'Mój profil'} />
          <SideBarItem to={'/my-diet'} label={'Moja dieta'} />
          <SideBarItem to={'/recipes'} label={'Przepisy'} />
          <SideBarItem to={'/diary'} label={'Dziennik postępów'} />
        </InnerDrawer>
      </Drawer>
    )
  }

}

SideBar.propTypes = { 
  isSideBarOpen: PropTypes.bool,
  handlerOnClick: PropTypes.func
}

SideBar.defaultProps = {
  handlerOnClick: () => {},
  isSideBarOpen: true
}

export default SideBar
