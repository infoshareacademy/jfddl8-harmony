import React from 'react'


class FetchUsers extends React.Component {
    state = {
        users: [],
        title: {
            style: { fontSize: 40, color: 'blue' },
            text: ''
        }
    }

    componentDidMount() {
        fetch('https://jfddl8-harmonylublin.firebaseio.com/users.json')
            .then(r => r.json())
            .then(data => this.setUsers(data))
            .catch(() => this.setState({
                title: {
                    style: { fontSize: 40, color: 'red' },
                    text: 'Błąd!'
                }
            }))
    }

    render() {
        return (
            <div>
                {/* {
                    this.state.users
                        .filter(
                            user => `${user.name} ${user.email} `
                        )
                        .map(
                            user => (
                                <div
                                    key={user.email}
                                >
                                    {user.name} {user.email}
                                </div>
                            )
                        )
                } */}
            </div>
        )
    }
}



export default FetchUsers

