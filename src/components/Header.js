import MainNavButton from './subComponents/MainNavButton';

export default {
    props: ['activeNav'],
    render() {
        return (
            <div>
                <MainNavButton gateDensity={12} activeNav={this.activeNav} onNavigationStateChange={() => this.$emit('navigationStateChange')}/>
            </div>
        )
    }
}