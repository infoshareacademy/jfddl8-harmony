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
        name: '',
        lastName: '',
        email: '',
        photo: null,
        title: {
            style: { fontSize: 40, color: 'blue' },
            text: ''
        }
    }
    onImageChange = (event) => {
        let imageData = event.target.files[0]
        let reader = new FileReader()
        if (!imageData) {
            return
        }
        reader.readAsDataURL(imageData)
        if (imageData.name.endsWith('.jpg') || imageData.name.endsWith('.png')) {
            if (imageData.size < 1048576) {
                reader.onload = (upload) => {
                    this.uploadUserImage({
                        method: 'PATCH',
                        body: JSON.stringify({ photo: upload.target.result })
                    })
                }
            } else {
                console.log('za duże zdjęcie')
            }
        } else {
            console.log('niepoprawny format zdjęcia')
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
                this.setState()
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
                <Typography> <h1>Imię: {this.state.name}</h1></Typography>
                <Typography> <h1>Nazwisko: {this.state.lastName}</h1></Typography>
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
                    onChange={this.onImageChange}
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

