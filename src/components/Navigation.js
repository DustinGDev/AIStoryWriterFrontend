import './../assets/css/Navigation.css';

export default {
    props: ['activeNav'],
    render() {
        return (
            <nav class={this.activeNav ? 'active' : ''}>
                <router-link class="default-button" to="/welcome">Welcome</router-link>
                <router-link class="default-button" to="/dashboard">Dashboard</router-link>
                <router-link class="default-button" to="/competitions">Competitions</router-link>
            </nav>
        )
    }
}