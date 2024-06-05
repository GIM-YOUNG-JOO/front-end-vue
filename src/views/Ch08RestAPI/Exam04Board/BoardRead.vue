<template>
    <div class="card">
        <div class="card-header">BoardRead</div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <p>bno: {{ board.bno }}</p>
                    <p>btitle: {{ board.btitle }}</p>
                    <p>bcontent: {{ board.bcontent }}</p>
                    <p>bwriter: {{ board.bwriter }}</p>
                    <p>bdate: {{ board.bdate }}</p>
                    <p>bhitcount: {{ board.bhitcount }}</p>
                </div>
                <div class="col-md-6">
                    <!-- 방법1 -->
                    <!--<img v-if="battach != null" width="300" :src="battach"/>-->

                    <!-- 방법2 -->
                    <img v-if="battach != null" width="300"
                        :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`" />
                </div>
            </div>

            <div class="mt-3">
                <button class="btn btn-info btn-sm me-2" @click="goBoardList">목록</button>
                <span v-if="$store.state.userId === board.bwriter">
                    <button class="btn btn-warning btn-sm me-2" @click="goBoardUpdate">수정</button>
                    <button class="btn btn-danger btn-sm me-2" @click="handleRemove">삭제</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import boardAPI from "@/apis/boardAPI";
import { useStore } from "vuex";

//상태 정의
const board = ref({});
const battach = ref(null);

const route = useRoute();
//Path Variable & QueryString 전달된 bno 얻기
let bno;
let pageNo;
if (route.query.bno == null) {
    bno = route.params.bno;
    pageNo = route.params.pageNo;
} else {
    bno = route.query.bno;
    pageNo = route.query.pageNo;
}

//해당 bno의 게시물 얻는 함수 정의
async function getBoard(argBno) {
    try {
        const response = await boardAPI.boardRead(argBno);
        board.value = response.data;
        if (board.value.battachoname != null) {
            getAttach(argBno);
        }
    } catch (error) {
        console.log(error);
    }
}

async function getAttach(argBno) {
    try {
        const response = await boardAPI.boardAttachDownload(argBno);
        const blob = response.data;
        battach.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

//store 객체 얻기
const store = useStore();
const router = useRouter();

if (store.state.userId !== '') {
    //로그인이 되어 있을 경우
    //bno에 해당하는 게시물 가져오기
    getBoard(bno);
} else {
    //로그인이 되어 있지 않을 경우
    router.push("/Ch08RestAPI/Exam03Login");
}

function goBoardList() {
    router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${pageNo}`);
}

function goBoardUpdate() {
    router.push(`/Ch08RestAPI/Exam04Board/BoardUpdate?bno=${bno}&pageNo=${pageNo}`);
}

async function handleRemove() {
    try {
        await boardAPI.boardDelete(bno);
        router.back();
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped></style>