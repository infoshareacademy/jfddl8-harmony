import styled from 'styled-components'
import ListItemMUI from '@material-ui/core/ListItem'

import DrawerMUI from '@material-ui/core/Drawer'

const Drawer = styled(DrawerMUI)`
  && {
    position: relative;
    display: flex;
    height: 100%;
      width: ${ props => props.isOpen ? 260 : 60}px; 
     & >  div {
        position: relative;
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


