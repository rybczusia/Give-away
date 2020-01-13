import React from 'react';
import {HomeLogin} from './Home';
import {HomeNavigation} from './Home';

class GiveAway extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='login-wrapper'>
                <HomeLogin/>
                <HomeNavigation/>
                <div className='home-header'>
                    <div className='home-wrapper'>
                        <div className='home-header-img'>
                        </div>
                        <div className='home-headline'>
                            <h1 className='home-headline-h1'>
                                <p>Oddaj rzeczy, których nie potrzebujesz</p>
                                <img className='home-headline-img' src={require('../assets/assets/Decoration.svg')} alt=''/>
                            </h1>
                            <p>
                                Wystarczą 4 proste kroki
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GiveAway;