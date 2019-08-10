import './../assets/css/Navigation.css';
import SignInUpOut from './subComponents/SignInUpOut';
import MainNavButton from './subComponents/MainNavButton';

export default {
    props: ['loggedIn'],
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a class="navbar-brand" href="#">
                    <MainNavButton gateDensity={12} loggedIn={this.loggedIn} />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto float-right">
                        <li class="nav-item active px-3 py-2">
                            <router-link class="btn btn-outline-secondary" to="/welcome">Welcome</router-link>
                        </li>
                        <li class="nav-item active px-3 py-2">
                            <router-link class="btn btn-outline-secondary" to="/dashboard">Dashboard</router-link>
                        </li>
                        <li class="nav-item active px-3 py-2">
                            <router-link class="btn btn-outline-secondary" to="/competitions">Competitions</router-link>
                        </li>
                        <li>
                            <SignInUpOut loggedIn={this.loggedIn} />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}