import React from 'react';
import {HomeLogin} from './Home';
import {HomeNavigation} from './Home';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            repeatPass:'',
            errors: {
                email: false,
                pass: false,
                repeatPass: false

            }
        };
    }

    messages = {
        pass_incorrect: 'Podane hasło jest nieprawidłowe!',
        email_incorrect: 'Podany mail jest nieprawidłowy!',
        repeatPass_incorrect: 'Podane hasła są różne'
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
        let repeatPass = false;
        let correct = false;

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if (this.state.pass.length > 5) {
            pass = true;
        }
        if (this.state.pass === this.state.repeatPass) {
            repeatPass = true;
        }
        if (email && email && repeatPass) {
            correct = true;
        }
        console.log('valid' + pass);
        console.log('valid' + email);
        console.log('valid' + correct);
        return ({
            pass,
            repeatPass,
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
                repeatPass: '',
                errors: {
                    email: false,
                    pass: false,
                    repeatPass: false
                }
            });

        } else {
            this.setState({
                errors: {
                    email: !validation.email,
                    pass: !validation.pass,
                    repeatPass: !validation.repeatPass
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
                 <form className="register">
                     <h2 className='home-headline'>Zarejestruj się</h2>
                     <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                 </form>
                 <form className='register-form'>
                     <div className='register-inputs'>
                         <label>
                             Email:
                             <input type="mail" value={this.state.email} name='email' onChange={this.handleChange}/>
                             {this.state.errors.email &&
                             <span className='form-error'>{this.messages.email_incorrect}</span>}
                         </label>
                         <label>
                         Hasło:
                         <input type="password" value={this.state.pass} name='pass' onChange={this.handleChange}/>
                         {this.state.errors.pass &&
                         <span className='form-error'>{this.messages.pass_incorrect}</span>}
                     </label>
                         <label>
                             Powtórz hasło:
                             <input type="password" value={this.state.repeatPass} name='repeatPass' onChange={this.handleChange}/>
                             {this.state.errors.repeatPass &&
                             <span className='form-error'>{this.messages.repeatPass_incorrect}</span>}
                         </label>
                     </div>

                     <div className='register-buttons'>
                         <input className='register-button' name='message' type="submit" value="Utwórz konto" onClick={this.handleSubmit}/>
                         <input className='register-button' name='message' type="submit" value="Zaloguj się" onClick={this.handleSubmit}/>
                     </div>
                 </form>

             </div>
         </>
     )
 }
}

export default Register;
