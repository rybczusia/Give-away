import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import Form from './Form';


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <HomeLogin/>
                <HomeNavigation/>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeSteps/>
                <HomeAbout/>
                <HomeHelping/>
                <HomeFooter/>
            </div>
        );
    }
}

class HomeLogin extends React.Component {
    handleLogin() {
        window.location = '/login';
    }
    handleRegister() {
        window.location = '/rejestracja'
    }
    render() {
        return (
            <div className='home-login'>
                <button className='home-login-btn' onClick={this.handleLogin}>Zaloguj</button>
                <button className='home-login-btn' onClick={this.handleRegister}>Załóż konto</button>
            </div>
        );
    }
}
class HomeNavigation extends React.Component {
    render() {
        return (
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
                    <li><Link to='helping' activeClass='active' spy={true} smooth={true} duration={500}>
                        Fundacje i organizacje</Link>
                    </li>
                    <li><Link to='contact' activeClass='active' spy={true} smooth={true}
                              duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
        )
    }
}

class HomeHeader extends React.Component {
    render() {
        return (
            <div className='home-header'>
                <div className='home-wrapper'>
                    <div className='home-header-img'>
                    </div>
                    <div className='home-headline'>
                        <h1 className='home-headline-h1'>
                            <p>Zacznij pomagać!</p>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <img className='home-headline-img' src={require('../assets/assets/Decoration.svg')} alt=''/>
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
                <div className='home-column'>
                    <p className='home-col-number'>10</p>
                    <p className='home-col-headline'>oddanych worków</p>
                    <p className='home-col-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className='home-column'>
                    <p className='home-col-number'>5</p>
                    <p className='home-col-headline'>wspartych organizacji</p>
                    <p className='home-col-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className='home-column'>
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
                        <img src={require('../assets/assets/Decoration.svg')} alt=''/>
                    </div>
                    <div className='home-steps-container'>
                        <div className='home-step'>
                            <img className='home-step-icon' src={require('../assets/assets/Icon-1.svg')} alt=''/>
                            <p className='home-step-title'>Wybierz rzeczy</p>
                            <span className='home-step-decoration'></span>
                            <p className='home-step-content'>Ubrania, zabawki, sprzęt i inne</p>

                        </div>
                        <div className='home-step'>
                            <img className='home-step-icon' src={require('../assets/assets/Icon-2.svg')} alt=''/>
                            <p className='home-step-title'>Spakuj je</p>
                            <span className='home-step-decoration'></span>
                            <p className='home-step-content'>Skorzystaj z worków na śmieci</p>

                        </div>
                        <div className='home-step'>
                            <img className='home-step-icon' src={require('../assets/assets/Icon-3.svg')} alt=''/>
                            <p className='home-step-title'>Zdecyduj komu chcesz pomóc</p>
                            <span className='home-step-decoration'></span>
                            <p className='home-step-content'>Wybierz zaufane miejsce</p>

                        </div>
                        <div className='home-step'>
                            <img className='home-step-icon' src={require('../assets/assets/Icon-4.svg')} alt=''/>
                            <p className='home-step-title'>Zamów kuriera</p>
                            <span className='home-step-decoration'></span>
                            <p className='home-step-content'>kurier przyjedzie w dogodnym terminie</p>

                        </div>
                    </div>
                    <div className='home-steps-buttons'>
                        <button onClick={this.handleLogin} className='home-steps-btn'>Oddaj rzeczy</button>
                    </div>


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
                            <h2>O nas</h2>
                            <img src={require('../assets/assets/Decoration.svg')} alt=''/>
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

class HomeHelping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fundActive: false,
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
                <div className='home-helping' name='helping'>
                    <div className='home-helping-headline'>
                        <h2>Komu pomagamy?</h2>
                        <img src={require('../assets/assets/Decoration.svg')} alt=''/>
                    </div>
                    <div className='home-helping-three'>
                        <button onClick={this.handleSectionClick} className='home-helping-three-btn'>Fundacjom
                        </button>
                        <button onClick={this.handleSectionClick} className='home-helping-three-btn'>Organizacjom
                            pozarządowym
                        </button>
                        <button onClick={this.handleSectionClick} className='home-helping-three-btn'>Lokalnym
                            zbiórkom
                        </button>

                    </div>
                    <p className='home-helping-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
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
        this.setState({
                currentPage: i
            }
        );
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
                'h2': 'Fundacja Dbam o zdrowie6',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie7',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            },
            {
                'h2': 'Fundacja Dbam o zdrowie8',
                'p': 'Cel i misja',
                'h3': 'ubrania, jedzenie, sprzęt A'
            }
        ];

        for (let i = 1; i <= Math.ceil(data.length / numbersPerPage); i++) {
            const el = <li key={i} onClick={e => this.handlePageClick(e, i)}
                           className={this.state.currentPage === i ? 'home-helping-active' : ''}>
                {i}
            </li>;
            pageNumbers.push(el);
        }
        const indexOfLast = currentPage * numbersPerPage;
        const indexOfFirst = indexOfLast - numbersPerPage;
        const currentElements = data.slice(indexOfFirst, indexOfLast);
        const elements = currentElements.map((d, i) => <div className='home-helping-item' key={d.h2}>
            <div className='home-helping-item-left'>
                <h2>{d.h2}</h2>
                <p>{d.p}</p>
            </div>
            <div className='home-helping-item-right'>
                <h3>{d.h3}</h3>
            </div>
        </div>);
        return (
            <>
                <div className='home-helping-items'>
                    {elements}
                </div>
                <section>
                    <ul className='home-helping-page'>
                        {pageNumbers}
                    </ul>
                </section>
            </>
        );
    }
}

class Organization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            numbersPerPage: 3
        };
    }

    handlePageClick = (e, i) => {
        this.setState({
                currentPage: i
            }
        );
    };

    render() {
        const {currentPage, numbersPerPage} = this.state;
        const pageNumbers = [];

        const data = [

            {
                'h2': 'Organizacja 1',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 2',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 3',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 4',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 5',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 6',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 7',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja 8',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            }
        ];
        for (let i = 1; i <= Math.ceil(data.length / numbersPerPage); i++) {
            const el = <li key={i} onClick={e => this.handlePageClick(e, i)}
                           className={this.state.currentPage === i ? 'home-helping-active' : ''}>
                {i}
            </li>;
            pageNumbers.push(el);
        }
        const indexOfLast = currentPage * numbersPerPage;
        const indexOfFirst = indexOfLast - numbersPerPage;
        const currentElements = data.slice(indexOfFirst, indexOfLast);
        const elements = currentElements.map((d, i) => <div className='home-helping-item' key={d.h2}>
            <div className='home-helping-item-left'>
                <h2>{d.h2}</h2>
                <p>{d.p}</p>
            </div>
            <div className='home-helping-item-right'>
                <h3>{d.h3}</h3>
            </div>
        </div>);
        return (
            <>
                <div className='home-helping-items'>
                    {elements}
                </div>
                <section>
                    <ul className='home-helping-page'>
                        {pageNumbers}
                    </ul>
                </section>
            </>
        );
    }
}

class Local extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            numbersPerPage: 3
        };
    }

    handlePageClick = (e, i) => {
        this.setState({
                currentPage: i
            }
        );
    };

    render() {
        const {currentPage, numbersPerPage} = this.state;
        const pageNumbers = [];

        const data = [
            {
                'h2': 'Organizacja lokalna 1',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 2',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 3',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 4',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 5',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 6',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 7',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            },
            {
                'h2': 'Organizacja lokalna 8',
                'p': 'Cel i misja',
                'h3': 'lerm ipsum'
            }
        ];


        for (let i = 1; i <= Math.ceil(data.length / numbersPerPage); i++) {
            const el = <li key={i} onClick={e => this.handlePageClick(e, i)}
                           className={this.state.currentPage === i ? 'home-helping-active' : ''}>
                {i}
            </li>;
            pageNumbers.push(el);
        }
        const indexOfLast = currentPage * numbersPerPage;
        const indexOfFirst = indexOfLast - numbersPerPage;
        const currentElements = data.slice(indexOfFirst, indexOfLast);
        const elements = currentElements.map((d, i) => <div className='home-helping-item' key={d.h2}>
            <div className='home-helping-item-left'>
                <h2>{d.h2}</h2>
                <p>{d.p}</p>
            </div>
            <div className='home-helping-item-right'>
                <h3>{d.h3}</h3>
            </div>
        </div>);


        return (
            <>
                <div className='home-helping-items'>
                    {elements}
                </div>
                <section>
                    <ul className='home-helping-page'>
                        {pageNumbers}
                    </ul>
                </section>
            </>
        );
    }
}

class HomeFooter extends React.Component {
    render() {
        return (
            <>
                <div className='home-footer' name='contact'>
                    <div className='home-footer-img'>
                    </div>
                    <div className='home-footer-wrapper'>
                        <div className='home-footer-content'>
                            <h2>Skontaktuj się z nami</h2>
                            <img src={require('../assets/assets/Decoration.svg')} alt=''/>
                            <Form></Form>

                        </div>

                    </div>
                </div>
            </>
        );
    }

}

export default Home;
export {HomeNavigation}
export {HomeLogin}

