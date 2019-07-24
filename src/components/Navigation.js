export default {
    props: ['activeNav'],
    render() {
        return (
            <nav>
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/competitions">Competitions</router-link>
            </nav>
        )
    }
}