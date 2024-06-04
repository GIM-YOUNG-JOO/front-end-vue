<template>
    <div class="card">
        <div class="card-header">Exam06InnerHtmlBinding</div>
        <div class="card-body">
            <div v-html="innerHtml"></div>
            <hr/>
            <button @click="changeData" class="btn btn-info btn-sm">내용 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let innerHtml = ref("");

let toggle = ref(true);
function changeData() {
    if(toggle.value){
        innerHtml.value = `
            <div>
                <h5>풍경1</h5>
                <img src="/images/photos/logo.png" height="150px"/>
            </div>
        `;
    } else {
        innerHtml.value = `
            <div>
                <h5>풍경2</h5>
                <img src="/images/photos/photo1.png" height="150px"/>
            </div>
        `;
    }
    toggle.value = !toggle.value;
}
</script>

<style scope>
</style>