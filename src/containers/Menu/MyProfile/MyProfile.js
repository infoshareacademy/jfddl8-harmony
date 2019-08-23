import React from 'react'

import { Paper, Typography, TextField, Button } from '@material-ui/core'


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
        user: {},
        photo: null,
        title: {
            style: { fontSize: 40, color: 'blue' },
            text: ''
        }
    }

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
    onDataUserChanged = (event) => {
        console.log('click')
    }

    componentDidMount() {
        fetch('https://jfddl8-harmonylublin.firebaseio.com/users/id.json')
            .then(r => {
                console.warn(r)
                return r.json()
            }).then((user => {
                console.warn('respond:', user)
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
                <div style={styles.imageContainer}>
                    {this.state.image ?
                        <img style={styles.photo}
                            src={this.state.image}
                            alt='Profile img' /> : null}
                </div>
                <Typography>
                    Imię: {this.state.user.name}
                </Typography>
                <TextField>{}</TextField>
                <Typography>
                    Nazwisko: {this.state.user.lastName}
                </Typography>
                <TextField>{}</TextField>
                <Typography>
                    Email: {this.state.user.email}
                </Typography>
                <TextField>{}</TextField>
                <Button
                    onChange={this.onDataUserChanged}
                    style={styles.button}
                    variant={'contained'}
                    color={'default'}
                > ZMIEŃ DANE OSOBOWE
                </Button>
            </Paper>
        )
    }
}



export default FetchUsers

