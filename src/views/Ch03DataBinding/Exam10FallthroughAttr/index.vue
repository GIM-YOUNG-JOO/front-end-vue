<template>
    <div class="card">
        <div class="card-header">Exam10FallthroughAttr</div>
        <div class="card-body">
            <UIComponentA id="uiComponentA" class="bg-info" style="color:orange" @click="handleClick"/>
            <UIComponentB id="uiComponentB" class="bg-info" style="color:orange" @click="handleClick"/>
            <UIComponentB id="uiComponentB" myclass="bg-success" mystyle="color:blue" @click="handleClick"/>
        </div>
    </div>
</template>

<script setup>
import UIComponentA from "./UIComponentA.vue";
import UIComponentB from "./UIComponentB.vue";

function handleClick() {
    console.log("Exam10FallthroughAttr.handleClick() 실행됨");
}
</script>

<style scoped>
</style>