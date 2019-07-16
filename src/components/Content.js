export default {
    props: ['test'],
    render() {
        return (
            <router-view test={this.test}></router-view>
        )
    }
}