import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './StampContainerData.css'

export class StampContainerData extends Component {
    render() {
        const stamp = this.props.stamp;
        const { name, yearPublished, isStamped, country } = stamp;
        return (
            <div>
                <table className='stampDataTable'>
                    <tbody className='stampDataTableBody'>
                        <tr>
                            <td className='tableLabel1'>Name:</td>
                            <td className='tableData1'>{name}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel2'>Published:</td>
                            <td className='tableData2'>{yearPublished}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel1'>Is Stamped:</td>
                            <td className='tableData1'>{'' + isStamped}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel2'>Country:</td>
                            <td className='tableData2'>{country}</td>
                        </tr>
                        <tr>
                            <td className='tableLabel1'>Price:</td>
                            <td className='tableData1'>{stamp.getPriceString()}</td>
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
