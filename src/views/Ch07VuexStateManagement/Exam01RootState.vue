<template>
    <div class="card">
        <div class="card-header">Exam01RootState</div>
        <div class="card-body">
            <h6>[루트 상태 읽기]</h6>
            <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
            <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
            <p>userId 단방향 바인딩: {{ getUserId() }}</p>
            <p>userId 단방향 바인딩: {{ computedUserId }}</p>
            <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"></p>

            <hr />

            <h6>루트 상태 변경</h6>
            <button class="btn btn-info btn-sm me-2" @click="changeByMutation">userId 변경(Mutation 동기 방식)</button>
            <button class="btn btn-info btn-sm" @click="changeByAction">userId 변경(Action 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

function getUserId() {
    return store.state.userId;
}

const computedUserId = computed(() => {
    return store.state.userId;
});

function changeByMutation() {
    new Promise((resolve, reject) => {
        //서버와 통신 작업
        //...3초 소요
        if (true) {
            //로그인 성공
            resolve({ result: "success", userId: "spring" });
        } else {
            //로그인 실패
            reject({ result: "fail", reason: "password is wrong" });
        }
    }).then((data) => {
        //작업이 성공했을 경우
        //상태 변경 작성
        console.log("로그인 성공");
        store.commit("setUserId", data.userId);
    }).catch((error) => {
        //작업이 실패했을 경우
        console.log("로그인 실패");
    });
}

const changeByAction = () => {
    store.dispatch("loginAction", null);
}
</script>

<style scoped></style>