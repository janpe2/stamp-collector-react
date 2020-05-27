import React, { Component } from 'react'
import StampContainerImage from './StampContainerImage'
import StampContainerData from './StampContainerData'
import PropTypes from 'prop-types'
import './StampContainer.css'

export class StampContainer extends Component {
    constructor() {
        super();
        this.state = {
            showFull: false,
        };
    }

    headerClicked() {
        if (!this.state.showFull) {
            this.props.setCurrentStamp(this.props.stamp);
        }
        this.setState({
            showFull: !this.state.showFull
        });
    }

    render() {
        const stamp = this.props.stamp;
        const {name, imageUrl} = stamp;
        return (
            <div className='StampContainer'>
                <div className='StampContainerHeader' onClick={() => this.headerClicked()}>
                    <img src={imageUrl} alt='stamp' className='thumbnail' hidden={this.state.showFull} /> {' '}
                    <span>{ name }</span> {' '}
                    <span hidden={this.state.showFull}>{ stamp.getPriceString() }</span> 
                </div> 
                <div hidden={!this.state.showFull} className='stampDataDiv'>
                    <table width='100%' className='stampDataTable'>
                        <tbody>
                            <tr>
                                <td width='50%'>
                                    <StampContainerImage imageUrl={imageUrl}/>
                                </td>
                                <td width='50%'>
                                    <StampContainerData stamp={this.props.stamp}
                                        deleteStampFromCollection={this.props.deleteStampFromCollection}/>                                   
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

StampContainer.propTypes = {
    stamp: PropTypes.object.isRequired,
    setCurrentStamp: PropTypes.func.isRequired,
}

export default StampContainer
