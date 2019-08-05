import React from 'react'

import AppBar from '../AppBar'
import SideBar from '../SideBar'

class Navigation extends React.Component {
  state = {
    isSideBarOpen: true
  }

  toggleSideBar = () => {
    console.warn('on Click')
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen
    })
  }

  render() {
    return (
      <div>
        <AppBar
          toggleSideBar={this.toggleSideBar}
        />
        <SideBar
          handlerOnClick={this.toggleSideBar}
          isSideBarOpen={this.state.isSideBarOpen}
          toggleSideBar={this.toggleSideBar}
        />
      </div>
    )
  }
}
export default Navigation