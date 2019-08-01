import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import FetchUsersContainer from '../../containers/FetchUsersContainer'
import ContactListContainer from '../../containers/ContactsListContainer/ContactsListContainer'

const Router = (props) => (
  <BrowserRouter>
    {props.children}
    <div>
      <Route path={'/fetch-users'} component={FetchUsersContainer} />
      <Route path={'/contact-list'} component={ContactListContainer} />
    </div>
  </BrowserRouter>
)

export default Router