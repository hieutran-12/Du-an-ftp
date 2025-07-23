<template>
  <SubmitApplication />
</template>

<script setup>
//import { useRouter } from "vue-router";
import { onMounted } from "vue";
import SubmitApplication from "./SubmitApplication.vue";
const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.replace("/Login"); // chỉ chuyển nếu chưa login
  }
});
</script>
