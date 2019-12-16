import React from 'react';
import headerlogo from '../assets/assets/Home-Hero-Image.jpg'

// import Link from "react-router-dom/modules/Link";


function Home() {
    return (
        <div className="home">
            <HomeLogin/>
            <HomeHeader/>
            <HomeThreeColumns/>
        </div>
    );
}

class HomeLogin extends React.Component {
    render() {
        return (
            <div className='home-login'>
                <button className='login-btn'>Zaloguj</button>
                <button className='login-btn'>Załóż konto</button>
            </div>
        )
    }
}


class HomeHeader extends React.Component {
    handleLogin() {
        window.location = "/login"
    }
    render() {
        return (
                <div className='home-header'>

                    <nav className='home-nav'>
                        <ul>
                            <li><a>Start</a></li>
                            <li><a>O co chodzi?</a></li>
                            <li><a>O nas</a></li>
                            <li><a>Fundacje i organizacje</a></li>
                            <li><a>Kontakt</a></li>
                        </ul>
                    </nav>
                    <div className='home-wrapper'>
                        <div className='header-img'>
                        </div>
                        <div className='headline-wrapper'>
                            <h1>
                                <p>Zacznij pomagać!</p>
                                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                                <img src={require('../assets/assets/Decoration.svg')} alt=''/>
                            </h1>

                            <div className='home-buttons'>
                                <button onClick={this.handleLogin} className='home-btn'>Oddaj rzeczy</button>
                                <button onClick={this.handleLogin} className='home-btn'>Zorganizuj zbiórkę</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

class HomeThreeColumns extends React.Component {
    render() {
        return (
            <div className="home-colums">

            </div>
        )
    }

}

export default Home;
