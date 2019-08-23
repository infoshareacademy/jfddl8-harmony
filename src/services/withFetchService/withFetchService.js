import React from 'react'

import { connect } from 'react-redux'

const withFetchService = (name, fetchActions) => (InnerComponent) => {
  const WithFetchService = props => <InnerComponent {...props} />

  const mapStateToProps = state => ({
    _data: state[name].data,
    _isFetching: state[name].isFetching,
    _userId: state.auth.userData.user_id
  })

  const mapDispatchToProps = dispatch => ({
    _getData: () => dispatch(fetchActions.getAsyncActionCreator()),
    _deleteItem: (key) => dispatch(fetchActions.removeAsyncActionCreator(key)),
    _addItem: (item) => dispatch(fetchActions.addAsyncActionCreator(item)),
    _toggleFavorite: (key, isFavorite) => dispatch(fetchActions.toggleFavoriteAsyncActionCreator(key, isFavorite))
  })


  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithFetchService)
}

export default withFetchService