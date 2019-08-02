import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'


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
          <Link to={'/home'} label={'Home'} />
          <Link to={'/my-profile'} label={'Moj profil'} />
          <Link to={'/my-diet'} label={'Moja dieta'} />
          <Link to={'/recipes'} label={'Przepisy'} />
          <Link to={'/diary'} label={'Dziennik postępów'} />
        </div>
      </Drawer>
    )
  }

}

export default SideBar
