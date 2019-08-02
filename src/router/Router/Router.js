import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../../containers/Menu/Home'
import MyProfile from '../../containers/Menu/MyProfile'
import MyDiet from '../../containers/Menu/MyDiet'
import Recipes from '../../containers/Menu/Recipes'
import Diary from '../../containers/Menu/Diary'

const Router = (props) => (
  <BrowserRouter>
  {props.children}
    <div>
      <Route path={'/home'} component={Home} />
      <Route path={'/my-profile'} component={MyProfile} />
      <Route path={'/my-diet'} component={MyDiet} />
      <Route path={'/recipes'} component={Recipes} />
      <Route path={'/diary'} component={Diary} />
    </div>
  </BrowserRouter>
)

export default Router