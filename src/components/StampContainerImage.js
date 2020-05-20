import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
