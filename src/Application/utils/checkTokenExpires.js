import { decode } from "./encoderToken.js";
import parseJwt from "./parseJwt.js";

export default function (token) {
    console.log(token, ((typeof token === typeof null && token !== null) || (typeof token === typeof '' && token !== 'null')));
    //console.log(parseJwt(decode(token)).exp, (parseJwt(decode(token)).exp >= Math.floor(Date.now() / 1000)));
    if (((typeof token === typeof null && token !== null) || (typeof token === typeof '' && token !== 'null'))) {
        if (parseJwt(decode(token)).exp >= Math.floor(Date.now() / 1000)) {
            console.log('Still good');
            return true
        } else {
            console.log('baad');
            window.localStorage.setItem('user', null);
            window.localStorage.setItem('TOKEN', null);
            return false
        }
    }
    return 'No token'

}