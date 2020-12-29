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


function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function deleteCookie(name) { setCookie(name, '', -1); }

const _id = (id) => document.getElementById(id);
