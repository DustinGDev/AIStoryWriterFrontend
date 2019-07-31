export default {
    data: function() {
        return {
            user: '',
            pass: ''
        }
    },
    methods: {
        handleUserChange: function(evt) {
            this.user = evt.target.value
        },
         handlePassChange: function(evt) {
            this.pass = evt.target.value
        }
    },
    props:['sendForm'],
    render() {
        console.log(this)
        return (
            <div class="default-form sign-in">
                <h3>Sign In</h3>
                <input type="text" name="username"  placeholder="Username" value={this.user} onChange={this.handleUserChange}/>
                <input type="password" name="password" placeholder="Password" value={this.pass} onChange={this.handlePassChange}/>
                <button type="button" onClick={() => this.sendForm({user: this.user, pass: this.pass, form: 'login'}, () => this.$emit('close'))}>Login</button>
            </div>
        )
    }
}