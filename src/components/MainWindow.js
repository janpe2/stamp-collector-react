import React, { Component } from 'react'
import StampContainer from './StampContainer'
import PropTypes from 'prop-types'

export class MainWindow extends Component {
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

MainWindow.propTypes = {
    stampCollection: PropTypes.array.isRequired
}

export default MainWindow
