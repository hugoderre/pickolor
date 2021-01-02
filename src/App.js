import React from 'react'
import Home from './Components/Home/Home'
import Board from './Components/Board/Board'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplay : 'home'
        }
        this.handleIsDisplay = this.handleIsDisplay.bind(this)
    }

    handleIsDisplay(location) {
        this.setState({
            isDisplay : location
        })
        // Test
    }

    render() {
        return (
            <div className="App" >
                <Home title="Pickolor" handleIsDisplay={this.handleIsDisplay} isDisplay={this.state.isDisplay} />
                <Board isDisplay={this.state.isDisplay} / >
            </div>
        )
    }
}