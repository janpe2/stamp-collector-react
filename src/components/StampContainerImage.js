import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './StampContainerImage.css'

export class StampContainerImage extends Component {
    render() {
        return (
            <div className='stampContainerImg'>
                <img src={this.props.imageUrl} alt='stamp'/>
            </div>
        )
    }
}

StampContainerImage.propTypes = {
    imageUrl: PropTypes.string.isRequired
}

export default StampContainerImage
