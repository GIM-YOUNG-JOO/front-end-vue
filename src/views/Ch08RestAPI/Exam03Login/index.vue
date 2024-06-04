<template>
    <div class="card">
        <div class="card-header">Exam03Login</div>
        <div class="card-body">
            <div v-if="$store.state.userId === ''">
                <form @submit.prevent="handleLogin()">
                    <div class="input-group mb-2">
                        <span class="input-group-text">아이디</span>
                        <input type="text" class="form-control" v-model="member.mid">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text">비밀번호</span>
                        <input type="password" class="form-control" v-model="member.mpassword">
                    </div>

                    <div>
                        <input type="submit" value="로그인" class="btn btn-danger btn-sm me-2" />
                        <!-- Vue에서 리셋 버튼은 양식을 초기화하지 않음 -->
                        <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm" /> -->
                        <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                    </div>
                </form>
            </div>
            <div v-if="$store.state.userId !== ''">
                <div>
                    <button class="btn btn-success btn-sm" @click="handleLogout">로그아웃</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import memberAPI from "@/apis/memberAPI";
import { useStore } from "vuex";

import axiosConfig from "@/apis/axiosConfig"
const store = useStore();

//상태 정의
const member = ref({
    mid: "",
    mpassword: ""
});

//로그인 버튼 클릭시 실행
async function handleLogin() {
    try {
        const data = JSON.parse(JSON.stringify(member.value));
        const response = await memberAPI.login(data);
        const payload = {
            userId: response.data.mid,
            accessToken: response.data.accessToken
        };
        store.dispatch("saveAuth", payload);
    } catch (error) {
        console.log(error);
    }
}

//재작성 버튼 클릭시 실행
function handleReset() {
    member.value.mid = "";
    member.value.mpassword = "";
}

//로그아웃 버튼 클릭시 실행
function handleLogout() {
    store.dispatch("deleteAuth");
    axiosConfig.removeAuthHeader(); // ??
}

</script>

<style scoped></style>