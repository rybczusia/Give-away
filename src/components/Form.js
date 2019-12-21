import React from 'react';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
            message: '',
            accept: false,
            errors: {
                name: false,
                email: false,
                message: false,
                accept: false
            }

        };
    }
    messages = {
        name_icorrect: 'Podane imię jest nieprawidłowe!',
        mail_icorrect: 'Podany mail jest nieprawidłowy!',
        message_icorrect: 'Wiadomość musi mieć minimm 120 znaków!',
    };
handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    })
};
formValidation = () => {
    let name = false;
    let email = false;
    let message = false;
    let accept = false;
    let correct = false
}

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation
    };


    render() {


    return (
        <form className='home-footer-form' onSubmit={this.handleSubmit}>
            <div className='home-form-line'>
                <label>
                    Wpisz swoje imię:
                    <input type="text" value={this.state.name} name='name'onChange={this.handleChange}/>
                </label>
                <label>
                    Wpisz swój e-mail:
                    <input type="mail" value={this.state.mail} name='email' onChange={this.handleChange}/>
                </label>
            </div>
            <div className='home-form-textarea'>
                <label>
                    Wpisz wiadomość:
                    <textarea value={this.state.message}/>
                </label>
            </div>

            <input className='home-footer-submit' name='message' type="submit" value="Wyślij"/>

        </form>
    );
}
}
export default Form;
