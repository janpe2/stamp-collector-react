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
        this.setState({
            showFull: !this.state.showFull
        });
    }

    render() {
        const {name, imageUrl} = this.props.stamp;
        return (
            <div className='StampContainer'>
                <div className='StampContainerHeader' onClick={() => this.headerClicked()}>
                    { name }
                </div> 
                <div hidden={!this.state.showFull}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <StampContainerImage imageUrl={imageUrl}/>
                                </td>
                                <td>
                                    <StampContainerData stamp={this.props.stamp}/>                                   
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
    stamp: PropTypes.object.isRequired
}

export default StampContainer
