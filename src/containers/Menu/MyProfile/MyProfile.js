import React from 'react'


class MyProfile extends React.Component {
    state = {}

    componentDidMount() {
        fetch('https://jfddl8-harmonylublin.firebaseio.com/users')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    avatarUrl: data.avatar_url,
                    name: data.name,
                    username: data.login,
                    location: data.location,
                })
            })
    }
    render() {
        return (
            <div >
                <img src={this.state.avatarUrl} />
                <p>@{this.state.username}</p>
                <p>{this.state.name} in {this.state.location}</p>
            </div >
        )
    }
}

export default MyProfile 