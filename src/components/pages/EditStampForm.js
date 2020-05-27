import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stamp from '../../Stamp';
import StampContainerImage from '../StampContainerImage'
import { withRouter } from 'react-router-dom';
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
            stampYearPublished: parseInt(event.target.value) || 0,
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
                const stamp = new Stamp(stampName, stampYearPublished, 
                    stampIsStamped, stampImageUrl, stampCountry, stampPrice, 0);

                if (this.props.stamp) {
                    stamp.id = this.props.stamp.id;
                    Object.assign(this.props.stamp, stamp);
                    this.props.updateCollection();
                } else {
                    stamp.id = this.props.stampCollection.length;
                    this.props.addStampToCollection(stamp);
                }

                this.goToMainPage();
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

    cancelClick = (event) => {
        this.goToMainPage();
    }

    goToMainPage() {
        this.props.history.push('/');
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
                            <input type='number' value={stampYearPublished} 
                                onChange={this.handleStampYearChange}  />
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
                            <input type='text' value={stampCountry} 
                                onChange={this.handleStampCountryChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className='col-6'>
                            <label>Price:</label>
                        </td>
                        <td className='col-6 r'>
                            <input type='number' step='0.01' min='0' value={stampPrice} 
                                onChange={this.handleStampPriceChange} />
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
                <div style={{paddingBottom: '1em'}}>
                    <button type='submit' className='btn btn-primary'>OK</button> {' '}
                    <button onClick={this.cancelClick} className='btn btn-secondary'>Cancel</button>
                </div>
            </form>
            </div>
        )
    }
}

EditStampForm.propTypes = {
    stamp: PropTypes.object, // optional
    addStampToCollection: PropTypes.func,
    stampCollection: PropTypes.array.isRequired,
    updateCollection: PropTypes.func.isRequired,
}

export default withRouter(EditStampForm)
