import React from 'react'

import { fetchs } from '../../../state/users'
import { connect } from 'react-redux'
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

import { addSnackbarActionCreator } from '../../../state/snackbars'

import fetchService from '../../../state/fetchServiceDuck'
import UploadButton from '../../../components/uploadButton/uploadButton'

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

class MyProfile extends React.Component {
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
                this.props._addSnack('Zbyt duży rozmiar zdjęcia! Maksymalnie 512 KB!', 'red')
            }
        } else {
            this.props._addSnack('Niepoprawny format zdjęcia! Tylko .jpg i .png', 'red')
        }
    }
    uploadUserImage = (options) => {
        const imageUrl = 'https://jfddl8-shredders.firebaseio.com/users/' + this.props._userId
        fetchWithToken(imageUrl + '.json?', options)
            .then(() => this.props._getUser(imageUrl))
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
                <div style={styles.photoContainer}>
                    {this.props._user && this.props._user.photo ?
                        <img style={styles.photo} src={this.props._user.photo} alt='Profile img' />
                        :
                        <AccountCircle style={{ width: 200, height: 200 }} />
                    }
                </div>
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
                    color={'default'}>
                    ZMIEŃ EMAIL
                </Button>
                <UploadButton
                    onClick={this.onImageChange}
                >
                    NOWE ZDJĘCIE UŻYTKOWNIKA
                </UploadButton>
            </Paper >
        )
    }
}
const fetchWithToken = fetchService('', 'auth').fetchWithToken

const mapStateToProps = state => ({
    _user: state.user
})

const mapDispatchToProps = dispatch => ({
    _addSnack: (text, color) => dispatch(addSnackbarActionCreator(text, color)),
    _getUser: (url) => dispatch(fetchs.getAsyncActionCreator(url))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfile)

