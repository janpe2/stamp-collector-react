import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListContainer from './pages/ListContainer'
import AboutContainer from './pages/AboutContainer'
import SummaryContainer from './pages/SummaryContainer'
import AddStampContainer from './pages/AddStampContainer'

export class MainWindow extends Component {
    render() {
        const stampCollection = this.props.stampCollection;
        return (
            <BrowserRouter>
                <div className='mainDiv'>
                    <div style={{paddingTop: '1em', paddingBottom: '0.50em'}}>
                        <Link to='/' className='routerLink'>List Stamps</Link> | {' '}
                        <Link to='/summary' className='routerLink'>Summary</Link> | {' '}
                        <Link to='/addstamp' className='routerLink'>Add Stamp</Link> | {' '}
                        <Link to='/about' className='routerLink'>About</Link>
                        <br/>
                    </div>
                
                    { /* We must use this syntax in Route if we want to pass properties to a component */ }
                    <Route exact path='/' render={props => (
                        <ListContainer stampCollection={stampCollection}/>
                    )} />

                    <Route path='/summary' render={props => (
                        <SummaryContainer stampCollection={stampCollection}/>
                    )} />
                    
                    <Route path='/addstamp' component={AddStampContainer} />
                    <Route path='/about' component={AboutContainer} />
                </div>
            </BrowserRouter>
        )
    }
}

MainWindow.propTypes = {
    stampCollection: PropTypes.array.isRequired
}

export default MainWindow
