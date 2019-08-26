import React from 'react'

import SideBar from '../SideBar'

class Navigation extends React.Component {
  state = {
    isSideBarOpen: false
  }

  toggleSideBar = () => {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen
    })
  }

  render() {
    return (
      <SideBar
        handlerOnClick={this.toggleSideBar}
        isSideBarOpen={this.state.isSideBarOpen}
        toggleSideBar={this.toggleSideBar}
      />
    )
  }
}
export default Navigation