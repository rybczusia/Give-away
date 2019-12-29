import React from 'react';
import { HomeLogin } from './Home';
import { HomeNavigation } from './Home';



class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            message: '',
            errors: {
                email: false,
                message: false
            }
        }
    }
    render() {
        return (
            <>
                <HomeLogin/>
                <HomeNavigation/>
                <div className="login">
                    <h2 className='home-headline'>Zaloguj się</h2>
                    <img className='home-icon' src={require('../assets/assets/Decoration.svg')} alt=''/>
                </div>
                <div className='login-form'>
                    <label>
                        Email:
                        <input type="mail" value={this.state.name} name='email' onChange={this.handleChange}/>
                        {this.state.errors.name && <span className='form-error'>{this.messages.email_incorrect}</span>}
                    </label>
                    <label>
                        Hasło:
                        <input type="mail" value={this.state.email} name='pass' onChange={this.handleChange}/>
                        {this.state.errors.email && <span className='form-error'>{this.messages.email_incorrect}</span>}
                    </label>
                </div>
            </>
        );
    }


}
export default Login;
