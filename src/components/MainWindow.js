import React, { Component } from 'react'
import StampContainer from './StampContainer'

export class MainWindow extends Component {
    render() {
        let list = [];
        let i = 0;
        this.props.stampCollection.forEach((element) => {
            list.push(<StampContainer stamp={element} key={i}/>);
            i++;
        });

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default MainWindow
