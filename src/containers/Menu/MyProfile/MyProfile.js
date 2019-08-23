import React from 'react'

import { Paper, Typography, Button } from '@material-ui/core'
import TextField from './TextField'

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
const initialState = {
    name: '',
    lastName: '',
    email: '',
    photo: null,
    title: {
        style: { fontSize: 40, color: 'blue' },
        text: ''
    }
}
class FetchUsers extends React.Component {
    state = initialState

    onPhotoChanged = (event) => {
        const file = document.querySelector('img').files[0]
        const reader = new FileReader()

        reader.addEventListener("load", function () {
            file.src = reader.result
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }
    onInputChangeHandler(property) {

        return (event) => {
            const newState = {}
            newState[property] = event.target.value

            this.setState(newState)
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
                <h1>Profil użytkownika</h1>
                <Button
                    onChange={this.onPhotoChanged}
                    style={styles.button}
                    variant={'contained'}
                    color={'default'}
                > DODAJ ZDJĘCIE </Button>
                <div
                    style={styles.imageContainer}>
                    {this.state.image ?
                        <img style={styles.photo}
                            src={this.state.image}
                            alt='Profile img' /> : null}
                </div>
                <Typography>
                    Imię: {this.state.name}
                </Typography>
                <Typography>
                    Nazwisko: {this.state.lastName}
                </Typography>
                <Typography>
                    Email: {this.state.email}
                </Typography>
                <TextField
                    value={this.state.email}
                    onChange={this.onInputChangeHandler('email')}
                    style={styles.input}
                    label={'zmień email'}
                    fullWidth
                    variant="outlined"
                    type={'email'}
                />
                <Button
                    onClick={this.onSaveClickHandler}
                    style={styles.button}
                    variant={'contained'}
                    color={'default'}
                > ZMIEŃ DANE OSOBOWE
                </Button>
            </Paper >
        )
    }
}



export default FetchUsers

