import React from 'react';
import {HomeLogin} from './Home';
import {HomeNavigation} from './Home';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            errors: {
                email: false,
                pass: false
            }
        };
    }

    messages = {
        pass_incorrect: 'Podane hasło jest nieprawidłowe!',
        email_incorrect: 'Podany mail jest nieprawidłowy!'
    };
    handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };

    formValidation() {
        let email = false;
        let pass = false;
        let correct = false;

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if (this.state.pass.length > 5) {
            pass = true;
        }
        if (email && email) {
            correct = true;
        }
        console.log('valid' + pass);
        console.log('valid' + email);
        console.log('valid' + correct);
        return ({
            pass,
            email,
            correct
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();
        if (validation.correct) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                body: JSON.stringify({
                    email: this.state.email,
                    pass: this.state.message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((resp => {
                    console.log(resp);
                    if (resp.status === 'success') {
                        return (alert('Zalogowano'))
                    }
                }))
                .catch(error => {
                    if (error.status) {
                        return (alert('Błąd'))
                    }
                });

            this.setState({
                email: '',
                pass: '',
                errors: {
                    email: false,
                    pass: false
                }
            });

        } else {
            this.setState({
                errors: {
                    email: !validation.email,
                    pass: !validation.pass
                }
            });
        }
    };


    render() {
        return (
            <>
                <div className='login-wrapper'>
                    <HomeLogin/>
                    <HomeNavigation/>
                    <form className="login">
                        <h2 className='home-headline'>Zaloguj się</h2>
                        <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                    </form>
                    <form className='login-form'>
                        <div className='login-inputs'>
                            <label>
                                Email:
                                <input type="mail" value={this.state.email} name='email' onChange={this.handleChange}/>
                                {this.state.errors.email &&
                                <span className='form-error'>{this.messages.email_incorrect}</span>}
                            </label>
                            <label>
                                Hasło:
                                <input type="password" value={this.state.pass} name='pass' onChange={this.handleChange}/>
                                {this.state.errors.email &&
                                <span className='form-error'>{this.messages.pass_incorrect}</span>}
                            </label>
                        </div>

                        <div className='login-buttons'>
                            <input className='login-button' name='message' type="submit" value="Utwórz konto" onClick={this.handleSubmit}/>
                            <input className='login-button' name='message' type="submit" value="Zaloguj się" onClick={this.handleSubmit}/>
                        </div>
                    </form>

                </div>
            </>
        );
    }
}


export default Login;
