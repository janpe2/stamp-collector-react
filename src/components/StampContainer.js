import React, { Component } from 'react'
import StampContainerImage from './StampContainerImage'
import StampContainerData from './StampContainerData'

export class StampContainer extends Component {
    constructor() {
        super();
        this.state = {
            showFull: false,
        };
    }

    headerClicked() {
        this.setState({
            showFull: !this.state.showFull
        });
    }

    render() {
        const stamp = this.props.stamp;
        return (
            <div style={{borderBottom: '2px solid white'}}>
                <div className='StampContainerHeader' onClick={() => this.headerClicked()} style={{cursor: 'pointer'}}>
                    { stamp.name }
                </div> 
                <div hidden={this.state.showFull} onClick={() => this.headerClicked()}>
                    <StampContainerImage imageUrl={stamp.imageUrl}/>
                    <StampContainerData name={stamp.name} yearPublished={stamp.yearPublished} isStamped={'' + stamp.isStamped}/>
                </div>
            </div>
        )
    }
}

export default StampContainer
