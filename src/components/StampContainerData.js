import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './StampContainerData.css'

export class StampContainerData extends Component {
    render() {
        const stamp = this.props.stamp;
        const { name, yearPublished, isStamped, country } = stamp;
        return (
            <div>
                <table className='stampDataTable col'>
                    <tbody className='stampDataTableBody'>
                        <tr>
                            <td className='tableLabel1 col-1'>Name:</td>
                            <td className='tableData1 col-4'>{name}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel2 col-1'>Published:</td>
                            <td className='tableData2 col-4'>{yearPublished}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel1 col-1'>Is Stamped:</td>
                            <td className='tableData1 col-4'>{'' + isStamped}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel2 col-1'>Country:</td>
                            <td className='tableData2 col-4'>{country}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel1 col-1'>Price:</td>
                            <td className='tableData1 col-4'>{stamp.getPriceString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

StampContainerData.propTypes = {
    stamp: PropTypes.object.isRequired
}

export default StampContainerData
