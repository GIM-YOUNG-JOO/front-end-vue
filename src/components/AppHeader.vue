<template>
    <nav class="navbar justify-content-between bg-dark text-white">
        <div class="ms-2">
            <img src="@/assets/logo.png" width="30" height="30" class="me-2">
            <span class="text-white">Vue.js</span>
        </div>
        <div class="me-2">
            <div v-if="$store.state.userId === ''">
                <RouterLink class="btn btn-success btn-sm" to="/Ch08RestAPI/Exam03Login">로그인</RouterLink>
            </div>
        </div>
        <div v-if="$store.state.userId !== ''">
            <span>User ID: {{ $store.state.userId }}</span>
            <button class="btn btn-light btn-sm ms-2" @click="handleLogout">로그아웃</button>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

function handleLogout(){
    store.dispatch("deleteAuth");
    router.push("/Ch08RestAPI/Exam03Login");
}

</script>

<style scope></style>