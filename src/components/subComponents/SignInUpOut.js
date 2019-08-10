import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './../../assets/css/subComponents/SignInUpOut.css';

export default {
    props: ['loggedIn'],
    render(h) {
        return (
            <div class="btn-group-vertical">
                {
                    this.loggedIn ? <button class="btn btn-outline-secondary" onClick={() => console.log('not yet implemented')}>Sign Out</button> :
                        [
                            <button class="btn btn-outline-secondary" onClick={() => this.$modal.show(SignInForm, {
                                sendForm: (data, close) => {this.$emit(''); close()
                                }})}>Sign In</button>,
                            <button class="btn btn-outline-secondary" onClick={() => this.$modal.show(SignUpForm, {
                                sendForm: (data, close) => {this.$emit(''); close()
                                }})}>Sign Up</button>
                        ]
                }
            </div>
        )
    }
}