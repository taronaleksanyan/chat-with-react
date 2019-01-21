import React, {Component} from 'react'

class Chat extends Component {
    render() {
        const {getMessages,getUsers,handleSubmit} = this.props
        return (
            <div>
                <div style={{display:'flex', 'justifyContent':'space-around'}}>
                    <div>
                        <ul>
                            {getMessages()}
                        </ul>  
                    </div>
                  
                    <div>
                        <h2>Users</h2>
                        <ul>
                            {getUsers()}
                        </ul>  
                    </div> 
                </div>
                
                <div style={{ position:'absolute' ,bottom:'0',width:'99%'}}>
                    <form onSubmit={handleSubmit}>
                        <input type={'text'} style={{width:'99%'}}/>
                        <input type={'submit'} style={{width:'99%'}}   />
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Chat