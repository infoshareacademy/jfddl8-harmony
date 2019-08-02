import React from 'react'

import Drawer from '@material-ui/core/Drawer'

import SideBarItem from './SideBarItem'

const styles = {
  innerDrawer: {
    width: 200
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <Drawer
        open={this.props.isSideBarOpen}
        onClose={this.props.toggleSideBar}
      >
        <div style={styles.innerDrawer}>
          <SideBarItem to={'/home'} label={'Home'} />
          <SideBarItem to={'/my-profile'} label={'Moj profil'} />
          <SideBarItem to={'/my-diet'} label={'Moja dieta'} />
          <SideBarItem to={'/recipes'} label={'Przepisy'} />
          <SideBarItem to={'/diary'} label={'Dziennik postępów'} />
        </div>
      </Drawer>
    )
  }

}

export default SideBar
