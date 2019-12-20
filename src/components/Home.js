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
                <HomeSection/>
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

class HomeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fundActive: true,
            orgActive: false,
            localActive: false
        };
    }

    handleSectionClick = (e) => {
        let newState = {...this.state};

        if (e.currentTarget.innerText === 'Fundacjom') {
            newState.fundActive = true;
            newState.orgActive = false;
            newState.localActive = false;
        } else if (e.currentTarget.innerText === 'Organizacjom pozarządowym') {

            newState.fundActive = false;
            newState.orgActive = true;
            newState.localActive = false;

        } else {

            newState.fundActive = false;
            newState.orgActive = false;
            newState.localActive = true;

        }

        this.setState(newState);
    };


    render() {
        const {fundActive, orgActive, localActive} = this.state;
        return (
            <>
                <div className='home-section'>
                    <div className='home-section-headline'>
                        <h2 className='home-headline'>Komu pomagamy?</h2>
                        <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                    </div>
                    <div className='home-section-three'>
                        <button onClick={this.handleSectionClick} className='home-section-three-btn btn-1'>Fundacjom
                        </button>
                        <button onClick={this.handleSectionClick} className='home-section-three-btn btn-2'>Organizacjom
                            pozarządowym
                        </button>
                        <button onClick={this.handleSectionClick} className='home-section-three-btn btn-2'>Lokalnym
                            zbiórkom
                        </button>

                    </div>
                    <p className='home-section-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                {fundActive && <Fund/>}
                {orgActive && <Organization/>}
                {localActive && <Local/>}
            </>

        );
    }
}

class Fund extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            numbersPerPage: 3
        };
    }

    handlePageClick = (e, i) => {
this.state({
    currentPage: i
})
    };

    render() {
        const {currentPage, numbersPerPage} = this.state;
        const pageNumbers = [];
        const data = [

            {
                'h2': 'Fundacja Dbam o zdrowie1',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie2',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie3',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie4',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie5',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie5',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            }
        ];


        for (let i = 1; i <= Math.ceil(data.length / numbersPerPage); i++) {
            const el = <li key={i} onClick={e => this.handlePageClick(e, i)}>
                 {i}
            </li>;
            pageNumbers.push(el);
        }


        return (
            <>
                <div className='section-items'>
                    {
                        data.map((d) => <div className='section-item' key={d.h2}>
                            <div className='section-item-left'>
                                <h2>{d.h2}</h2>
                                <p>{d.p}</p>
                            </div>
                            <div className='section-item-right'>
                                <h3>{d.h3}</h3>
                            </div>
                        </div>)
                    }
                </div>
                <section>
                    <ul className='pageNumbers'>
                        {pageNumbers}
                    </ul>
                </section>
            </>
        );
    }
}


class Organization extends React.Component {

    render() {
        return (
            <div className='section-items'>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum1</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum2"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum3"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum4"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum5"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum6"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum7"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>Organizacja "Lroem ipsum7"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
            </div>
        );
    }
}

class Local extends React.Component {

    render() {
        return (
            <div className='section-items'>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum1</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum2"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum3"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum4"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum5"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum6"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum7"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
                <div className='section-item'>
                    <div className='section-item-left'>
                        <h2>"Lroem ipsum7"</h2>
                        <p>Cel i misja</p>
                    </div>
                    <div className='section-item-right'>

                        <h3>ubrania, jedzenie, sprzęt A</h3>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;

