<template>
  <user-fetcher></user-fetcher>
</template>

<script setup>
import { defineComponent } from "vue";
import UserFetcher from "./components/UserFetcher.vue";
defineComponent({
  components: UserFetcher,
});
</script>

<style scoped></style>
