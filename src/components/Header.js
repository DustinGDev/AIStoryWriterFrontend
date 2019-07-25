import MainNavButton from './subComponents/MainNavButton';
import '../assets/css/Header.css';

export default {
    props: ['activeNav'],
    render() {
        return (
            <header>
                <MainNavButton gateDensity={12} activeNav={this.activeNav} onNavigationStateChange={() => this.$emit('navigationStateChange')}/>
            </header>
        )
    }
}