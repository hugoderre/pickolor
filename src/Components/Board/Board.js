import React from 'react'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.location = 'board'
        this.state = {
            colorSuite: []
        }
        this.nextColor = this.nextColor.bind(this)
    }

    componentWillMount() {
        setInterval(this.nextColor, 1000)
    }

    nextColor() {
        this.setState({
            colorSuite: [...this.state.colorSuite, 'red' ]
        })
    }

    render() {
        if (this.props.isDisplay !== this.location) return null;
        return (
            <div id="board_main-container" ></div>
        )
           
    }
}