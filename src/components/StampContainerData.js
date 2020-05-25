import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './StampContainerData.css'

export class StampContainerData extends Component {
    handleEditStamp = (event) => {
        //this.props.editStamp();
    }

    handleDeleteStamp = (event) => {
        if (window.confirm(`Do you want to delete stamp '${this.props.stamp.name}'?`)) {
            let id = this.props.stamp.id;
            this.props.deleteStampFromCollection(id);
        }
    }

    render() {
        const stamp = this.props.stamp;
        return (
            <div>
                <table className='stampDataTable col'>
                    <tbody className='stampDataTableBody'>
                        <tr>
                            <td className='tableLabel1 col-1'>Name:</td>
                            <td className='tableData1 col-4'>{stamp.name}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel2 col-1'>Published:</td>
                            <td className='tableData2 col-4'>{stamp.yearPublished}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel1 col-1'>Is Stamped:</td>
                            <td className='tableData1 col-4'>{'' + stamp.isStamped}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel2 col-1'>Country:</td>
                            <td className='tableData2 col-4'>{stamp.country}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel1 col-1'>Price:</td>
                            <td className='tableData1 col-4'>{stamp.getPriceString()}</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{textAlign: 'center'}}>
                    <button type="button" onClick={this.handleEditStamp} className='btn btn-light'>Edit</button> {' '}
                    <button type="button" onClick={this.handleDeleteStamp} className='btn btn-warning'>Delete</button>
                </div>
            </div>
        )
    }
}

StampContainerData.propTypes = {
    stamp: PropTypes.object.isRequired
}

export default StampContainerData
