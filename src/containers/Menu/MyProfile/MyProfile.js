import React from 'react'

import { Paper, Typography, Button, TextField } from '@material-ui/core'


const styles = {
    paper: {
        margin: 20,
        padding: 30
    },
    input: {
        margin: 5
    },
    button: {
        margin: 15,
        width: 160
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    photo: {
        maxWidth: 300,
        maxHeight: 300
    }
}

class FetchUsers extends React.Component {
    state = {
        user: {
            name: '',
            lastName: '',
            email: '',
            newEmailError: false,
        },
        photo: null,
        title: {
            style: { fontSize: 40, color: 'blue' },
            text: ''
        }
    }

    onEmailChangeHandler = input => event => {
        const newUser = { ...this.state.user }
        newUser[input] = event.target.value
        this.setState({ user: newUser })
    }

    componentDidMount() {
        fetch('https://jfddl8-harmonylublin.firebaseio.com/users/id.json')
            .then(r => {
                return r.json()
            }).then((user => {
                this.setState({ user })
            }))
            .catch(() => this.setState({
                title: {
                    style: { fontSize: 40, color: 'red' },
                    text: 'Błąd na stronie. Spróbuj później jeszcze raz!'
                }
            }))
    }

    onClickHandler = () => {
        fetch("https://jfddl8-harmonylublin.firebaseio.com/users/id.json", {
            method: "PATCH",
            body: JSON.stringify({ email: this.state.user.email })
        })
            .then(() => this.setState({
                title: {
                    style: { fontSize: 40, color: 'green' },
                    text: 'Masz nowy email'
                }
            }))
            .catch(error => this.setState({
                title: {
                    style: { fontSize: 40, color: 'red' },
                    text: 'Wystąpił błąd na stronie. Spróbuj później'
                }
            }))
    }

    render() {
        return (
            <Paper style={{ padding: '20px' }}>
                <Typography> <h1>Imię: {this.state.user.name}</h1></Typography>
                <Typography> <h1>Nazwisko: {this.state.user.lastName}</h1></Typography>
                <Typography>
                    Email: {this.state.user.email}
                </Typography>
                <TextField
                    value={this.state.user.email}
                    onChange={this.onEmailChangeHandler('email')}
                    fullWidth
                    variant="outlined"
                    helperText={this.state.newEmailError ? "Wprowadź prawidłowy email!" : ''}
                    type={'email'}
                    error={this.state.newEmailError}
                />
                <Button
                    onClick={this.onClickHandler}
                    color={'primary'}>
                    ZMIEŃ EMAIL
                </Button>
            </Paper >
        )
    }
}



export default FetchUsers

