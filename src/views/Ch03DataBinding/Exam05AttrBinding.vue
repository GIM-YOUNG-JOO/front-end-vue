<template>
    <div class="card">
        <div class="card-header">Exam05AttrBinding</div>
        <div class="card-body">
            <div class="mb-4">
                <h5>속성="변수"</h5>
                <a :href="vueHome" class="me-3">뷰 홈페이지</a>
                <RouterLink :to="appHome">홈페이지</RouterLink>
            </div>

            <div class="mb-4">
                <h5>속성="연산식" | `매개변수화 된 문자열`</h5>
                <!--<img :src="require('@/assets/photos/' + imgName)" height="150px" class="me-2" />
                <img :src="require(`@/assets/photos/${imgName}`)" height="150px" />-->
                <img :src="'/images/photos/' + imgName" height="150px" class="me-2" />
                <img :src="`/images/photos/${imgName}`" height="150px" />
            </div>

            <div class="mb-4">
                <h5>:class="변수 | 객체 | 배열"</h5>
                <div class="mr-3 fw-bold text-info">아름다운 풍경</div>
                <div class="mr-3" :class="className1">아름다운 풍경</div>
                <div class="mr-3" :class="[className1, className2]">아름다운 풍경</div>
                <div class="mr-3" :class="{ 'fw-bold': isBold, 'text-danger': isRed }">아름다운 풍경</div>
            </div>

            <div class="mb-4">
                <h5>:style="변수 | 객체 | 배열"</h5>
                <div style="margin-bottom: 10px; font-weight: bold;">아름다운 풍경</div>
                <div style="margin-bottom: 10px;" :style="[style1, style2]">아름다운 풍경</div>
                <div style="margin-bottom: 10px;" :style="{'font-weight': fontWeight, 'color':textColor}">아름다운 풍경</div>
            </div>

            <hr/>

            <button class="btn btn-info btn-sm" @:click="changeData">상태 변수값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

let vueHome = ref("https://vuejs.org");
let appHome = ref("/");
let imgName = ref("photo1.png");
let className1 = ref("fw-bold");
let className2 = ref("text-warning");
let isBold = ref(true);
let isRed = ref(false);
let style1 = ref("margin-bottom:10px");
let style2 = ref("font-weight: bold");
let fontWeight = ref("bold");
let textColor = ref("green");
let toggle = ref(true);

function changeData() {
    if(toggle.value) {
        imgName.value = "logo.png";
        className1.value = "text-success";
        fontWeight.value="";
        textColor.value = "#0000FF";
        toggle.value = false;
    } else {
        imgName.value = "photo1.png";
        className1.value = "text-danger";
        fontWeight.value="bold";
        textColor.value = "#00FF00";
        toggle.value = true;
    }
}
</script>

<style scope></style>