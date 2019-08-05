import React from 'react'
import PropTypes from 'prop-types'

// import Drawer from '@material-ui/core/Drawer'
import { Drawer, InnerDrawer} from './SideBar.styled'
import SideBarItem from './SideBarItem'



class SideBar extends React.Component {
  render() {
    return (
      <Drawer
        variant="persistent"
        open //={this.props.isSideBarOpen}
        // style={{position: 'fixed'}}
        onClose={this.props.toggleSideBar}
        isOpen = {this.props.isSideBarOpen}
        // style={this.props.isSideBarOpen ? styles.drawerOpen : styles.drawerClose}
        // PaperProps={{style: this.props.isSideBarOpen ? styles.drawerOpen : styles.drawerClose}}
      >
        <InnerDrawer  onClick={this.props.handlerOnClick}>
          <SideBarItem onClick={this.props.handlerOnClick} to={'/home'} label={'Home'} />
          <SideBarItem to={'/my-profile'} label={'Moj profil'} />
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
