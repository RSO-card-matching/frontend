const Login = {
    data() {
        return {
            user: "",
            pass: ""
        }
    },
    methods: {
        executeLogin() {
            // TODO: this
            alert("User: " + this.user + ", pass: " + this.pass)
            document.cookie = "user=" + this.user
            alert("Cookie: " + document.cookie)
        },
        loginGoogle() {
            // TODO: this
            alert("Not yet implemented!")
        }
    }
}

Vue.createApp(Login).mount('#login')