import './../assets/css/Navigation.css';

export default {
    props: ['activeNav'],
    render() {
        return (
            <nav class={this.activeNav ? 'active' : ''}>
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/competitions">Competitions</router-link>
            </nav>
        )
    }
}