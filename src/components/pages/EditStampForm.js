import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stamp from '../../Stamp';
import StampContainerImage from '../StampContainerImage'
import './EditStampForm.css'

export class EditStampForm extends Component {
    constructor(props) {
        super(props);
        const stamp = props.stamp;
        this.state = {
            stampName: stamp ? stamp.name : '',
            stampYearPublished: stamp ? stamp.yearPublished : '',
            stampIsStamped: stamp ? stamp.isStamped : false,
            stampCountry: stamp ? stamp.country : '',
            stampPrice: stamp ? stamp.price : 0.00,
            stampImageUrl: stamp ? stamp.imageUrl : '',
        }
    }

    handleStampNameChange = (event) => {
        this.setState({
            stampName: event.target.value,
        });
    }

    handleStampYearChange = (event) => {
        this.setState({
            stampYearPublished: parseInt(event.target.value),
        });
    }

    handleStampStampedChange = (event) => {
        this.setState({
            stampIsStamped: event.target.value === 'true'
        });
    }

    handleStampCountryChange = (event) => {
        this.setState({
            stampCountry: event.target.value,
        });
    }

    handleStampPriceChange = (event) => {
        this.setState({
            stampPrice: event.target.value,
        });
    }

    handleStampImageUrlChange = (event) => {
        this.setState({
            stampImageUrl: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { stampName, stampYearPublished, stampIsStamped, stampCountry, 
            stampPrice, stampImageUrl } = this.state;

        stampPrice = parseFloat(stampPrice) || 0.00;
        stampIsStamped = !!stampIsStamped; 
        stampName = stampName || 'Stamp has no name';
        if (!stampCountry) {
            window.alert('No country given');
            return;
        }

        this.checkImage(stampImageUrl, 
            () => {
                const id = this.props.stampCollection.length;
                const stamp = new Stamp(stampName, stampYearPublished, 
                    stampIsStamped, stampImageUrl, stampCountry, stampPrice, id);
                this.props.addStampToCollection(stamp);
            },
            () => {
                window.alert('Image is not valid');
            });
    }

    checkImage(url, imgSuccessFunction, imgErrorFunction) {
        let img = new Image();
        img.onload = imgSuccessFunction;
        img.onerror = imgErrorFunction;
        img.src = url;
    }

    render() {
        const { stampName, stampYearPublished, stampIsStamped, stampCountry, 
            stampPrice, stampImageUrl } = this.state;
        return (
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <StampContainerImage imageUrl={stampImageUrl} />
                <table className='col'>
                <tbody>
                    <tr>
                        <td className='col-6'>
                            <label>Name:</label>
                        </td>
                        <td className='col-6 r'>
                            <input type='text' value={stampName} onChange={this.handleStampNameChange}  />
                        </td>
                    </tr>
                    <tr>
                        <td className='col-6'>
                            <label>Published:</label>
                        </td>
                        <td className='col-6 r'>
                            <input type='text' value={stampYearPublished} onChange={this.handleStampYearChange}  />
                        </td>
                    </tr>
                    <tr>
                        <td className='col-6'>
                            <label>Is Stamped:</label>
                        </td>
                        <td className='col-6 r'>
                            <select value={stampIsStamped} onChange={this.handleStampStampedChange} >
                                <option value='false'>false</option>
                                <option value='true'>true</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='col-6'>
                            <label>Country:</label>
                        </td>
                        <td className='col-6 r'>
                            <input type='text' value={stampCountry} onChange={this.handleStampCountryChange}  />
                        </td>
                    </tr>
                    <tr>
                        <td className='col-6'>
                            <label>Price:</label>
                        </td>
                        <td className='col-6 r'>
                            <input type='text' value={stampPrice} onChange={this.handleStampPriceChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className='col-6'>
                            <label>Image URL:</label>
                        </td>
                        <td className='col-6 r'>
                            <input type='text' value={stampImageUrl} 
                                onChange={this.handleStampImageUrlChange}  />
                        </td>
                    </tr>
                </tbody>
                </table>
                <button type='submit' className='btn btn-primary' style={{marginBottom: '1em'}}>OK</button>
            </form>
            </div>
        )
    }
}

EditStampForm.propTypes = {
    stamp: PropTypes.object, // optional
    addStampToCollection: PropTypes.func.isRequired,
    stampCollection: PropTypes.array.isRequired
}

export default EditStampForm
