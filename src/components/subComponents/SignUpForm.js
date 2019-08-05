export default {
    data: function() {
        return {
            user: '',
            pass: '',
            eMail: ''
        }
    },
    methods: {
        handleUserChange: function(evt) {
            this.user = evt.target.value
        },
        handlePassChange: function(evt) {
            this.pass = evt.target.value
        },
        handleMailChange: function(evt) {
            this.eMail = evt.target.value
        }
    },
    props:['sendForm'],
    render() {
        console.log(this)
        return (
            <div class="default-form sign-in">
                <h3>Sign Up</h3>
                <input type="text" name="username"  placeholder="Username" value={this.user} onChange={this.handleUserChange}/>
                <input type="password" name="password" placeholder="Password" value={this.pass} onChange={this.handlePassChange}/>
                <input type="e-mail" name="e-mail" placeholder="E-mail" value={this.eMail} onChange={this.handleMailChange}/>
                <button type="button" onClick={() => this.sendForm({user: this.user, pass: this.pass, form: 'register'}, () => this.$emit('close'))}>Login</button>
            </div>
        )
    }
}