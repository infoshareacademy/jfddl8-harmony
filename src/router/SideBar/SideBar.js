import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import ListIcon from '@material-ui/icons/List'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'



import { Drawer, InnerDrawer } from './SideBar.styled'
import SideBarItem from './SideBarItem'


const styles = {
  button: {
    marginLeft: '5px'
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <Drawer
        variant="persistent"
        open
        onClose={this.props.toggleSideBar}
        isOpen={this.props.isSideBarOpen}

      >
        <InnerDrawer>
          <IconButton onClick={this.props.handlerOnClick}
            edge="start"
            color="inherit"
            aria-label="menu"
            style={styles.button}
          >
            <MenuIcon />
          </IconButton>
          <SideBarItem icon={<HomeIcon />} to={'/home'} label={'Home'} />
          <SideBarItem icon={<PersonIcon />} to={'/my-profile'} label={'Mój profil'} />
          <SideBarItem icon={<RestaurantIcon />} to={'/my-diet'} label={'Moja dieta'} />
          <SideBarItem icon={<ListIcon />} to={'/recipes'} label={'Przepisy'} />
          <SideBarItem icon={<VerifiedUserIcon />} to={'/diary'} label={'Dziennik postępów'} />
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
  handlerOnClick: () => { },
  isSideBarOpen: true
}

export default SideBar
