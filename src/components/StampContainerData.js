import React, { Component } from 'react'

export class StampContainerData extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}<br/>{this.props.yearPublished}<br/>{this.props.isStamped}</p>
            </div>
        )
    }
}

export default StampContainerData
