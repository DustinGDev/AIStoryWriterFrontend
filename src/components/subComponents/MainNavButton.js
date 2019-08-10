import './../../assets/css/subComponents/MainNavButton.css';

export default {
    props: ['gateDensity', 'activeNav'],
    methods: {
        generateGate(h, gateDensity = this.gateDensity) {
            const rows = [];

            for (let row = 0; row < gateDensity; row++) {
                const columns = [];

                for (let column = 0; column < gateDensity; column++) {
                    columns.push(
                        <td></td>
                    )
                }

                rows.push(
                    <tr>{columns}</tr>
                )
            }

            return rows;
        },
    },
    render(h) {
        return (
            <div class="main-nav-button" onClick={() => this.$emit('navigationStateChange')}>
                <table>
                    <tbody>
                        {this.generateGate(h)}
                    </tbody>
                </table>
                <div>

                </div>
            </div>
        )
    }
}