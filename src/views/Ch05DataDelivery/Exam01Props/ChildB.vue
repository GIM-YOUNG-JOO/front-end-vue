<template>
    <div class="card">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <p>productNo: {{ productNo }}</p>
            <p>productKind: {{ productKind }}</p>
            <p>product: {{ product.no }}, {{ product.kind }}</p>
            <p>no: {{ no }}</p>
            <p>kind: {{ kind }}</p>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps(["productNo", "productKind", "product", "no", "kind"]);

console.log("productNo:", prop.productNo);
console.log("productKind:", prop.productKind);
console.log("product:", JSON.parse(JSON.stringify(prop.product)));
console.log("no:", prop.no, typeof(prop.no));
console.log("kind:", prop.kind);
</script>

<style scoped>
</style>