import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../../containers/Menu/Home'
import MyProfile from '../../containers/Menu/MyProfile'
import MyDiet from '../../containers/Menu/MyDiet'
import Diary from '../../containers/Menu/Diary'
import AppBar from '../AppBar'
import AddRecipeContainer from '../../containers/Menu/addRecipeContainer/AddRecipeContainer'
import { RouteWrapper, RouterContainer } from './Router.styled'
import Recipes from '../../containers/Recipes'

const Router = (props) => (
  <BrowserRouter>
    <AppBar />
    <RouterContainer>
      {props.children}
      <RouteWrapper>
        <Route path={'/'} component={Home} exact />
        <Route path={'/home'} component={Home} />
        <Route path={'/my-profile'} component={MyProfile} />
        <Route path={'/my-diet'} component={MyDiet} />
        <Route path={'/recipes/:recipeKey?'} component={Recipes} />
        <Route path={'/add-recipes'} component={AddRecipeContainer} />
        <Route path={'/diary'} component={Diary} />
      </RouteWrapper>
    </RouterContainer>
  </BrowserRouter>
)

export default Router