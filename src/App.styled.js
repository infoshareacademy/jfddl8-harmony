import styled from 'styled-components'

const MainWrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
position: relative;
 & > div {
     height: calc(100% - 80px);
 }
`

export {
    MainWrapper
}