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
        },
        photo: null,
        title: {
            style: { fontSize: 40, color: 'blue' },
            text: ''
        }
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


    render() {
        return (
            <Paper style={styles.paper}>
                <Typography> <h1>Imię: {this.state.user.name}</h1></Typography>
                <Typography> <h1>Nazwisko: {this.state.user.lastName}</h1></Typography>
                <Typography>
                    Email: {this.state.user.email}
                </Typography>
            </Paper >
        )
    }
}



export default FetchUsers

