import styled from 'styled-components'

import AppBarMUI from '@material-ui/core/AppBar'
import { FacebookShareButton, FacebookIcon } from 'react-share'


export const AppBar = styled(AppBarMUI)`
    && {
        width: 100%;
        background-color: #393e46;
        color: #fff;
        height: 80px;
        img {
          display: inline-block;
          height: 80px;
        }
    }`

export const Logo = styled.div`
    {
      height: 80px;
    }`


export const FacebookIconStyled = styled(FacebookIcon)`
    rect{
    fill: gray !important;
    }
    
  `
export const FacebookShareButtonStyled = styled(FacebookShareButton)`
position: absolute;
right: 20px;
`
