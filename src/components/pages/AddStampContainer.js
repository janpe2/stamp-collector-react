import React, { Component } from 'react'
import EditStampForm from './EditStampForm'
import PropTypes from 'prop-types'

export default class AddStampContainer extends Component {
    render() {
        return (
            <div>
                <EditStampForm stamp={null} 
                    addStampToCollection={this.props.addStampToCollection}/>
            </div>
        )
    }
}

AddStampContainer.propTypes = {
    addStampToCollection: PropTypes.func.isRequired
}
