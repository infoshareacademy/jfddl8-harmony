import styled , {css} from 'styled-components'

import DrawerMUI from '@material-ui/core/Drawer'

export const Drawer = styled(DrawerMUI)`
  && {
    width: ${ props => {
      console.log(props)
      return props.isOpen ? 200 : 80;
    }}px; 
    .MuiPape-root {
      ${someStyle}
    }
    div {
      width: ${ props => {
        console.log(props)
        return props.isOpen ? 200 : 80;
      }}px;
      
      background: green;
      &:hover {
        background: red;
      }
    }
  }
`

export const InnerDrawer = styled.div`
    width: 200px;
`

const someStyle = css`
background: lightblue
`

