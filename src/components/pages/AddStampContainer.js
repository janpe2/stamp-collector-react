import React, { Component } from 'react'
import EditStampForm from './EditStampForm'
import PropTypes from 'prop-types'

export default class AddStampContainer extends Component {
    render() {
        return (
            <div>
                <EditStampForm stamp={null} stampCollection={this.props.stampCollection}
                    addStampToCollection={this.props.addStampToCollection}
                    updateCollection ={this.props.updateCollection} />
            </div>
        )
    }
}

AddStampContainer.propTypes = {
    addStampToCollection: PropTypes.func.isRequired,
    stampCollection: PropTypes.array.isRequired,
    updateCollection: PropTypes.func.isRequired,
}
