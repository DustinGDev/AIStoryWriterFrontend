import './../assets/css/Content.css';

export default {
    props: ['test'],
    render() {
        return (
            <div class="content-container">
                <router-view test={this.test}></router-view>
            </div>
        )
    }
}