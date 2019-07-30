import MainNavButton from './subComponents/MainNavButton';
import '../assets/css/Header.css';
import SignInUpOut from './subComponents/SignInUpOut';

export default {
    props: ['activeNav'],
    render() {
        return (
            <header>
                <MainNavButton gateDensity={12} activeNav={this.activeNav} onNavigationStateChange={() => this.$emit('navigationStateChange')}/>
                <SignInUpOut loggedIn={false} />
            </header>
        )
    }
}