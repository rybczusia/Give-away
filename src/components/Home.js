import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';


class Home extends React.Component {
    render() {

        return (
            <div className="home">
                <HomeLogin/>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeSteps/>
                <HomeAbout/>
                <HomeFundation/>
            </div>
        );
    }

}


class HomeLogin extends React.Component {
    render() {
        return (
            <div className='home-login'>
                <button className='login-btn'>Zaloguj</button>
                <button className='login-btn'>Załóż konto</button>
            </div>
        );
    }
}


class HomeHeader extends React.Component {
    handleLogin() {
        window.location = '/login';
    }

    render() {
        return (
            <div className='home-header'>

                <nav className='home-nav'>
                    <ul>
                        <li><a>Start</a></li>
                        <li>
                            <Link to='steps' activeClass='active' spy={true} smooth={true} duration={500}>
                                O co chodzi?
                            </Link>
                        </li>
                        <li><Link to='about' activeClass='active' spy={true} smooth={true} duration={500}>
                            O nas
                        </Link></li>
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
        );
    }
}

class HomeThreeColumns extends React.Component {
    render() {
        return (
            <div className="home-columns">
                <div className='home-col-1'>
                    <p className='home-col-number'>10</p>
                    <p className='home-col-headline'>oddanych worków</p>
                    <p className='home-col-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                </div>
                <div className='home-col-2'>
                    <p className='home-col-number'>5</p>
                    <p className='home-col-headline'>wspartych organizacji</p>
                    <p className='home-col-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                </div>
                <div className='home-col-3'>
                    <p className='home-col-number'>7</p>
                    <p className='home-col-headline'>zorganizowanych zbiórek</p>
                    <p className='home-col-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                </div>
            </div>
        );
    }

}

class HomeSteps extends React.Component {
    handleLogin() {
        window.location = '/login';
    }

    render() {
        return (
            <>
                <div className='home-steps' name='steps'>
                    <div className='home-steps-headline'>
                        <h2>Wystarczą 4 proste kroki</h2>
                        <img className='step-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                    </div>
                    <div className='home-steps-container'>
                        <div className='home-step'>
                            <img className='step-icon' src={require('../assets/assets/Icon-1.svg')} alt=''/>
                            <p className='step-title'>Wybierz rzeczy</p>
                            <span className='step-decoration-line'></span>
                            <p className='step-content'>Ubrania, zabawki, sprzęt i inne</p>

                        </div>
                        <div className='home-step'>
                            <img className='step-icon' src={require('../assets/assets/Icon-2.svg')} alt=''/>
                            <p className='step-title'>Spakuj je</p>
                            <span className='step-decoration-line'></span>
                            <p className='step-content'>Skorzystaj z worków na śmieci</p>

                        </div>
                        <div className='home-step'>
                            <img className='step-icon' src={require('../assets/assets/Icon-3.svg')} alt=''/>
                            <p className='step-title'>Zdecyduj komu chcesz pomóc</p>
                            <span className='step-decoration-line'></span>
                            <p className='step-content'>Wybierz zaufane miejsce</p>

                        </div>
                        <div className='home-step'>
                            <img className='step-icon' src={require('../assets/assets/Icon-4.svg')} alt=''/>
                            <p className='step-title'>Zamów kuriera</p>
                            <span className='step-decoration-line'></span>
                            <p className='step-content'>kurier przyjedzie w dogodnym terminie</p>

                        </div>
                    </div>
                    <button onClick={this.handleLogin} className='home-btn'>Oddaj rzeczy</button>

                </div>
            </>
        );
    }
}

class HomeAbout extends React.Component {
    render() {
        return (
            <>
                <div className='home-about' name='about'>
                    <div className='home-about-content'>
                        <div className='home-about-wrapper'>
                            <h2 className='home-headline'>O nas</h2>
                            <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                            <p className='home-about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>

                    </div>
                    <div className='home-about-img'>
                        <img src={require('../assets/assets/People.jpg')} alt=''/>
                    </div>

                </div>
            </>
        );
    }
}

class HomeFundation extends React.Component {
    render() {
        return (
            <div className='home-section'>
                <div className='home-section-headline'>
                    <h2 className='home-headline'>Komu pomagamy?</h2>
                    <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                </div>
                <div className='home-section-three'>
                    <button className='home-section-three-btn'>Fundacjom</button>
                    <button className='home-section-three-btn'>Organizacjom pozarządowym</button>
                    <button className='home-section-three-btn'>Lokalnym zbiórkom</button>

                </div>
                <p className='home-section-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        );
    }
}

export default Home;
