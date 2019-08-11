import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../../containers/Menu/Home'
import MyProfile from '../../containers/Menu/MyProfile'
import MyDiet from '../../containers/Menu/MyDiet'
import Diary from '../../containers/Menu/Diary'
import AppBar  from '../AppBar'
import AddRecipeContainer from '../../containers/Menu/addRecipeContainer/AddRecipeContainer'
import { RouteWrapper, RouterContainer } from './Router.styled'
import ItemsList from '../../components/items-list';
import CustomizedDialogs from '../../components/dialog-window';
import ListItem from '../../components/list-item';
import ListContainer from '../../containers/list-container';

const Router = (props) => (
  <BrowserRouter>
     <AppBar /> 
    <RouterContainer>
    {props.children}
      <RouteWrapper>
        <Route path={'/home'} component={Home} />
        <Route path={'/my-profile'} component={MyProfile} />
        <Route path={'/my-diet'} component={MyDiet} />
        <Route path={'/recipes'} component={ListContainer} />
        <Route path={'/add-recipes'} component={AddRecipeContainer}/>
        <Route path={'/items-list'} component={ItemsList} />
        <Route path={'/list-item'} component={ListItem} />
        <Route path={`/:key`} component={CustomizedDialogs} />
        <Route path={'/diary'} component={Diary} />
      </RouteWrapper>
    </RouterContainer>
  </BrowserRouter>
)

export default Router