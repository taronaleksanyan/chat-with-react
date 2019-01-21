import React, {Component} from 'react'

import Chat from '../../components/Chat'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mesages: ['hello'],
            users: ['matt'],
            user: 'aa',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited');
        
    }
    getMessages = () => {
        let {mesages} = this.state
        mesages = mesages.map((msg,i) => {
            return (<li key={i}>{msg}</li>)
        })
        return mesages
    }

    getUsers = () => {
        let {users} = this.state
        users = users.map((msg,i) => {
            return (<li key={i}>{msg}</li>)
        })
        return users
    }
    render() {
        const {getMessages,getUsers,handleSubmit} = this
        let chatProps = {
            getMessages,
            getUsers,
            handleSubmit
        }
        return (
            <React.Fragment>
                {this.state.user && (<Chat {...chatProps} />)}
            </React.Fragment>
            
        )
    }
}

export default Home