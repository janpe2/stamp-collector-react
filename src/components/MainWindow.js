import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListContainer from './pages/ListContainer'
import AboutContainer from './pages/AboutContainer'
import SummaryContainer from './pages/SummaryContainer'
import AddStampContainer from './pages/AddStampContainer'
import EditStampContainer from './pages/EditStampContainer'

export class MainWindow extends Component {
    constructor(props) {
        super();
        this.state = {
            dataManager: props.dataManager,
            stampCollection: props.stampCollection,
            currentStamp: null,
        }
    }

    addStampToCollection = (stamp) => {
        // If stamps are deleted, using this.state.stampCollection.length as stamp id
        // may produce duplicate ids. Make sure the new stamp gets a unique id.
        let maxId = 0;
        this.state.stampCollection.forEach((element) => {
            maxId = Math.max(element.id, maxId);
        });
        stamp.id = maxId + 1;
        this.state.stampCollection.push(stamp);
        this.updateCollection();
    }

    updateCollection = () => {
        this.setState({
            stampCollection: this.state.dataManager.stampCollection
        });
    }

    deleteStampFromCollection = (id) => {
        let manager = this.state.dataManager;
        manager.stampCollection = manager.stampCollection.filter((element) => {
            return element.id !== id;
        });
        this.updateCollection();
    }

    setCurrentStamp = (stamp) => {
        this.setState({
            currentStamp: stamp
        });
    }

    render() {
        const stampCollection = this.state.stampCollection;
        return (
            <BrowserRouter>
                <div className='mainDiv'>
                    <div className='linksDiv'>
                        <Link to='/' className='routerLink'>List Stamps</Link> | {' '}
                        <Link to='/summary' className='routerLink'>Summary</Link> | {' '}
                        <Link to='/addstamp' className='routerLink'>Add Stamp</Link> | {' '}
                        <Link to='/about' className='routerLink'>About</Link>
                        <br/>
                    </div>
                
                    { /* We must use this syntax in Route if we want to pass properties to a component */ }
                    <Route exact path='/' render={props => (
                        <ListContainer stampCollection={stampCollection} 
                            deleteStampFromCollection={this.deleteStampFromCollection}
                            setCurrentStamp={this.setCurrentStamp} />
                    )} />

                    <Route path='/summary' render={props => (
                        <SummaryContainer stampCollection={stampCollection}/>
                    )} />

                    <Route path='/addstamp' render={props => (
                        <AddStampContainer addStampToCollection={this.addStampToCollection}
                            stampCollection={stampCollection} updateCollection={this.updateCollection} />
                    )} />

                    <Route path='/editstamp' render={props => (
                        <EditStampContainer updateCollection={this.updateCollection}
                            stamp={this.state.currentStamp} stampCollection={stampCollection} />
                    )} />
                    
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
