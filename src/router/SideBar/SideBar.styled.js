import React from 'react'

import styled from 'styled-components'
import ListItemMUI from '@material-ui/core/ListItem'

import DrawerMUI from '@material-ui/core/Drawer'

const CustomDrawer = (props) => {
  const {
    isOpen,
    ...restOfProps
  } = props

  return (
    <DrawerMUI
      {...restOfProps}
    />
  )
}

const Drawer = styled(CustomDrawer)`
  && {
    position: sticky;
    bottom: 0;
    display: flex;
    width: ${ props => props.isOpen ? 260 : 60}px; 
    & >  div {
      overflow: hidden;
      position: sticky;
      bottom: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: ${ props => props.isOpen ? 260 : 60}px;
        background: #eee;
            &:hover {
              background: #eee;
            }
    }
  }
  `

const InnerDrawer = styled.div`
    width: 260px;
    `

const ListItem = styled(ListItemMUI)`
  &&{
    display: flex;
    flex-direction: row;
    width: 260px;
    text-transform: uppercase;
    line-height: 30px;
    letter-spacing: 2px;
    span {
      font-size: 12px;
      letter-spacing: 2px;
    }
  }

`

export {
  Drawer, InnerDrawer, ListItem
}


