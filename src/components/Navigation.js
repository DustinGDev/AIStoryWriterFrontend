import './../assets/css/Navigation.css';

export default {
    props: ['activeNav'],
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link class="default-button" to="/welcome">Welcome</router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="default-button" to="/dashboard">Dashboard</router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="default-button" to="/competitions">Competitions</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}