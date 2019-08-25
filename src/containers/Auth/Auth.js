import React from 'react'
import { connect } from 'react-redux'

import LogInWindow from '../../components/LogInWindow'
import SignUpWindow from '../../components/SignUpWindow'

import { logInAsyncActionCreator, signInAsyncActionCreator, checkIfUserIsLoggedInAsyncActionCreator } from '../../state/auth'



class Auth extends React.Component {
	state = {
		email: '',
		password: '',
		password2: '',
		emailToLogIn: '',
		passwordToLogIn: '',
    isSignUp: false
	}

	onEmailChanged = (event) => this.setState({ email: event.target.value })
	onPasswordChanged = (event) => this.setState({ password: event.target.value })
	onPasswordChanged2 = (event) => this.setState({ password2: event.target.value })

	onEmailToLogInChanged = (event) => this.setState({ emailToLogIn: event.target.value })
	onPasswordToLogInChanged = (event) => this.setState({ passwordToLogIn: event.target.value })

	onLogInClick = () => this.props._logIn(this.state.emailToLogIn, this.state.passwordToLogIn)

  onSignInSubmit = () => this.props._signIn(this.state.email, this.state.password)
  
  onSignInClick = () => this.setState({
    isSignUp: !this.state.isSignUp
  })


	render() {

    this.props._check()
    
		return (
			<div>
				{
					this.props._isUserLoggedIn ?
						this.props.children
            :
            this.state.isSignUp ? <SignUpWindow 
            email={this.state.email}
            password={this.state.password}
            password2={this.state.password2}

            onEmailChanged={this.onEmailChanged}
            onPasswordChanged={this.onPasswordChanged}
            onPasswordChanged2={this.onPasswordChanged2}

            onSignInSubmit={this.onSignInSubmit}
            onBackClick={this.onSignInClick}
            />

            :

						<LogInWindow
							emailToLogIn={this.state.emailToLogIn}
							passwordToLogIn={this.state.passwordToLogIn}

							onEmailToLogInChanged={this.onEmailToLogInChanged}
              onPasswordToLogInChanged={this.onPasswordToLogInChanged}
              
              onSignInClick={this.onSignInClick}
							onLogInClick={this.onLogInClick}
						/>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	_isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
	_logIn: (email, password) => dispatch(logInAsyncActionCreator(email, password)),
  _signIn: (email, password) => dispatch(signInAsyncActionCreator(email, password)),
  _check: () => dispatch(checkIfUserIsLoggedInAsyncActionCreator())
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth)