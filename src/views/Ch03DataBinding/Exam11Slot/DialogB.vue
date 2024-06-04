<template>
    <DialogTemplate>
        <template v-slot:header>알림</template>
        <template v-slot:body><p>DialogB 내용입니다.</p></template>
        <template v-slot:footer>
            <button class="btn btn-info btn-sm" @click="emit('close')">확인</button>
        </template>
    </DialogTemplate>
</template>

<script setup>
import DialogTemplate from "./DialogTemplate.vue";
const emit = defineEmits(["close"]);
</script>

<style scoped>
</style>