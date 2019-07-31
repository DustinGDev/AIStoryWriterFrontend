import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './../../assets/css/subComponents/SignInUpOut.css';

export default {
    props: ['loggedIn'],
    render(h) {
        return (
            <div class="sign-in-out">
                {
                    this.loggedIn ? <button onClick={() => console.log('not yet implemented')}>Sign Out</button> :
                        [
                            <button onClick={() => this.$modal.show(SignInForm, {sendForm: (data, close) => {console.log('sendform', data), close()}})}>Sign In</button>,
                            <span>|</span>,
                            <button onClick={() => this.$modal.show(SignUpForm)}>Sign Up</button>
                        ]
                }
            </div>
        )
    }
}