import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {
                name: false,
                email: false,
                message: false
            }
        };
    }

    messages = {
        name_incorrect: 'Podane imię jest nieprawidłowe!',
        email_incorrect: 'Podany mail jest nieprawidłowy!',
        message_incorrect: 'Wiadomość musi mieć minimm 120 znaków!'
    };
    handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };

    formValidation() {
        let name = false;
        let email = false;
        let message = false;
        let correct = false;

        if (this.state.name.length > 3 && this.state.name.indexOf(' ') === -1) {
            name = true;
        }
        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if (this.state.message.length > 120) {
            message = true;
        }
        if (name && email && message) {
            correct = true;
        }
        console.log('valid' + name);
        console.log('valid' + email);
        console.log('valid' + message);
        console.log('valid' + correct);
        return ({
            name,
            email,
            message,
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
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                }),
                headers: {
                        'Content-Type': 'application/json'
                    }
            })
                .then((resp) => resp.json())
                .then((resp => {
                    console.log(resp);
                    if (resp.status === 'success') {
                        return (alert('Formularz został wysłany'))
                    }
                }))
                .catch(error => {
                    if (error.status) {
                        return (alert('Błąd w wysyłaniu formularza'))
                    }
                });

            this.setState({
                name: '',
                email: '',
                message: '',
                errors: {
                    name: false,
                    email: false,
                    message: false
                }
            });

        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    email: !validation.email,
                    message: !validation.message
                }
            });
        }
    };

    render() {

        return (
            <form className='home-footer-form' onSubmit={this.handleSubmit}>
                <div className='home-form-line'>
                    <label>
                        Wpisz swoje imię:
                        <input type="text" value={this.state.name} name='name' onChange={this.handleChange}/>
                        {this.state.errors.name && <span className='form-error'>{this.messages.name_incorrect}</span>}
                    </label>
                    <label>
                        Wpisz swój e-mail:
                        <input type="mail" value={this.state.email} name='email' onChange={this.handleChange}/>
                        {this.state.errors.email && <span className='form-error'>{this.messages.email_incorrect}</span>}
                    </label>
                </div>
                <div className='home-form-textarea'>
                    <label>
                        Wpisz wiadomość:
                        <textarea value={this.state.message} name='message' onChange={this.handleChange}/>
                        {this.state.errors.message &&
                        <span className='form-error'>{this.messages.message_incorrect}</span>}
                    </label>
                </div>

                <input className='home-footer-submit' name='message' type="submit" value="Wyślij"
                       onClick={this.handleSubmit}/>

            </form>
        );
    }
}

export default Form;
