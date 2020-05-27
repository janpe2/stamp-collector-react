import React, { Component } from 'react'
import EditStampForm from './EditStampForm'
import PropTypes from 'prop-types'

export default class EditStampContainer extends Component {
    render() {
        return (
            <div>
                <EditStampForm stamp={this.props.stamp} 
                    stampCollection={this.props.stampCollection} addStampToCollection={null}
                    updateCollection={this.props.updateCollection} />
            </div>
        )
    }
}

EditStampContainer.propTypes = {
    stampCollection: PropTypes.array.isRequired,
    updateCollection: PropTypes.func.isRequired,
    stamp: PropTypes.object.isRequired,
}