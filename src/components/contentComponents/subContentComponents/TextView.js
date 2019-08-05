export default {
    props: ['text'],
    render() {
        console.log('test', this.$slots);
        return (
            <p class="text-default">
                {this.text || this.$slots.default}
            </p>
        )
    }
}