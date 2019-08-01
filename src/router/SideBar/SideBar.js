import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import SideBarItem from '../SideBar/SideBarItem'


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
          <SideBarItem to={'/fetch-users'} label={'Fetch Users'} />
          <SideBarItem to={'/contact-list'} label={'ContactList'} />
        </div>
      </Drawer>
    )
  }

}

export default SideBar
