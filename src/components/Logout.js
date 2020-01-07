import React from 'react';
import {HomeLogin} from './Home';
import {HomeNavigation} from './Home';


class Logout extends React.Component {
    handleClick = () => {
        window.location = '/'
    }
    render() {
        return (
            <div className='logout-wrapper'>
                <HomeLogin/>
                <HomeNavigation/>
                <form className="logout">
                    <h2 className='home-headline'>Wylogowanie nastąpiło pomyślnie!</h2>
                    <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                </form>
                <button className='logout-home-page' onClick={this.handleClick}>
                    Strona główna
                </button>
            </div>
        );
    }


}

export default Logout;
