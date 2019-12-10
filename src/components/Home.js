import React from 'react';
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
            <div className='home_login'>
                <button className='login-btn'>Zaloguj</button>
                <button className='login-btn'>Załóż konto</button>
            </div>
        )
    }
}


class HomeHeader extends React.Component {
    render() {
        return (
            <div className='home_wrapper'>
                <div className='home_header'>
                    <div className='header_img'>
                        <img src="" alt=""/>
                    </div>
                    <nav className='home_nav'>
                        <ul>
                            <li><a>Start</a></li>
                            <li><a>O co chodzi?</a></li>
                            <li><a>O nas</a></li>
                            <li><a>Fundacje i organizacje</a></li>
                            <li><a>Kontakt</a></li>
                        </ul>
                    </nav>
                    <h1>
                        <p>Zacznij pomagać! </p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    </h1>

                    <div className='home_buttons'>
                        <button className='home_btn'>Oddaj rzeczy</button>
                        <button className='home_btn'>Zorganizuj zbiórkę</button>
                    </div>
                </div>
            </div>
        )
    }

}

class HomeThreeColumns extends React.Component {
    render() {
        return (
            <div className="home_colums">

            </div>
        )
    }

}

export default Home;
