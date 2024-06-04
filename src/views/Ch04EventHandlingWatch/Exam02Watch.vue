<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>

            <div class="mb-2">
                <button class="btn btn-info btn-sm" @click="handleProductChange">product 상태의 객체 변경</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

//상태 생성
let userId = ref("");

//상태 감지
watch(userId, (newUserId, oldUserId) => {
    console.group("userId 변경 감시");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd();
});

//상태 생성
let product = ref({
    name: "",
    company: "",
    price: 0
});

//변경 감시
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 변경 감시");
    console.log("newProduct : ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct : ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
});

watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 변경 감시 + 속성까지도 변경 감시");
    console.log("newProduct : ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct : ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
}, { deep: true });

//특정 속성만 변경 감시
watch(() => product.value.price, (newPrice, oldPrice) => {
    console.group("price 속성만 변경 감시");
    console.log("newPrice : ", newPrice);
    console.log("oldPrice : ", oldPrice);
    console.groupEnd();
});

//여러개의 상태를 감시할 경우
watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) => {
    console.group("여러개의 상태를 감시할 경우");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.log("newProduct : ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct : ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
});


function handleProductChange() {
    //속성값만 변경
    product.value.price = 90000000;

    //객체 자체가 변경
    product.value = {
        name: "제네시스",
        company: "현대",
        price: 80000000
    };
}
</script>

<style scoped></style>