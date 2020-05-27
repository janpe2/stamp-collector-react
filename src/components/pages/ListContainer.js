import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StampContainer from '../StampContainer'

export default class ListContainer extends Component {
    createStampContainers() {
        let list = this.props.stampCollection.map((stamp) => {
            return <StampContainer stamp={stamp} key={stamp.id} 
                deleteStampFromCollection={this.props.deleteStampFromCollection}
                setCurrentStamp={this.props.setCurrentStamp} />;
        });
        return list;
    }

    render() {
        return (
            <div style={{padding: '5px'}}>
                {this.createStampContainers()}
            </div>
        )
    }
}

ListContainer.propTypes = {
    stampCollection: PropTypes.array.isRequired
}

