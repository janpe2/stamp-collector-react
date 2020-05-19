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
            <div>
                <div className='StampContainerHeader' onClick={() => this.headerClicked()}>
                    { stamp.name }
                </div> 
                <div hidden={!this.state.showFull}>
                    <StampContainerImage imageUrl={stamp.imageUrl}/>
                    <StampContainerData stamp={stamp}/>
                </div>
            </div>
        )
    }
}

export default StampContainer
