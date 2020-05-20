import React, { Component } from 'react'

export default class SummaryContainer extends Component {
    render() {
        let list = [];
        let i = 0;
        this.props.stampCollection.forEach((element) => {
            list.push(<p key={i}>{element.name}</p>);
            i++;
        });
        return (
            <div className='mainDiv'>
                <h1>Summary of Stamps</h1>
                <div>
                    {list}
                </div>
            </div>
        )
    }
}
