import axios from "axios";
import qs from "qs";

function getBoardList(pageNo = 1) {
    //GET: http://localhost/board/list?pageNo=1
    return axios.get("/board/list", { params: { pageNo:pageNo } })
}

//게시물 쓰기
function boardWrite(formData){
    return axios.post("/board/create", formData);
}

export default{
    getBoardList,
    boardWrite
};