<template>
    <div class="card">
        <div class="card-header">Exam07IfShowBinding</div>
        <div class="card-body">
            <div v-if="isPhoto" class="mb-2">
                <img src="/images/photos/photo1.png" height="150"/>
            </div>
            <div v-show="isPhoto">
                <img src="/images/photos/logo.png" height="150"/>
            </div>
            <hr/>
            <button class="btn btn-info btn-sm" @click="changeData">상태 변수값 변경</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

let isPhoto = ref(true);

function changeData() {
    isPhoto.value = !isPhoto.value;
}

</script>

<style scope>
</style>