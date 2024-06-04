import axios from "axios";
import qs from "qs";

function join(member) {
    /*member = {
        mid: "id"
        mname: "name"
        mpassword: "pw"
        memail: "id@ema.il"
    }

    */
    //POST: raw/json 방식으로 전달
    return axios.post("/member/join", member);
}

//로그인
function login(member) {
    /*
    member = {
        mid: "member",
        mpassword: "12345"    
    }
    */
   //POST: QueryString(mid=user&mpassword=12345) 방식으로 전달
   return axios.post("/member/login", qs.stringify(member));
}

export default {
    join,
    login
};