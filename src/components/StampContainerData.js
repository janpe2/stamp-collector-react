import React, { Component } from 'react'

export class StampContainerData extends Component {
    render() {
        let stamp = this.props.stamp;
        return (
            <div>
                <p>{stamp.name}<br/>{stamp.yearPublished}<br/>{'' + stamp.isStamped}</p>
            </div>
        )
    }
}

export default StampContainerData
