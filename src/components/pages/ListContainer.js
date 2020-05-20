import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StampContainer from '../StampContainer'

export default class ListContainer extends Component {
    render() {
        let list = [];
        let i = 0;
        this.props.stampCollection.forEach((element) => {
            list.push(<StampContainer stamp={element} key={i}/>);
            i++;
        });

        return (
            <div style={{padding: '5px'}}>
                {list}
            </div>
        )
    }
}

ListContainer.propTypes = {
    stampCollection: PropTypes.array.isRequired
}

