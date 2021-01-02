import React from 'react';
import RainbowText from '../Lib/RainbowText'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.location = 'home'
        this.dest = 'board'
        this.handleStart = this.handleStart.bind(this)
    }

    handleStart() {
        this.props.handleIsDisplay(this.dest)
    }
    
    render() {
        if(this.props.isDisplay !== 'home') {
            return null
        }
        return (
            
            <div id="home_top-bar-container">
                <h1 id="home_top-bar-title"><RainbowText text={this.props.title} /></h1>
                <p>A few colors goes to appears in your screen. Reproduct the serie at the end !</p>
                <div id="home_start-btn" onClick={this.handleStart}>START</div>
            </div>
        )  
    }
    
}

export default Home;