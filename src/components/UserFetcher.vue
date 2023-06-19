<template>
  <div>Hello from Host</div>
  <div class="card-container">
    <div class="card" v-for="user in users">
      <h2>{{ user.name }}</h2>
      <p>{{ user.address }}</p>
      <p>{{ user.tel }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const users = ref([]);

onMounted(async () => {
  try {
    // set address as ENV variable in GCP
    const response = await axios("https://api-image-6yjtu3mr4q-ew.a.run.app/users");
    users.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.card-container {
  display: flex;
}
.card {
  padding: 1rem;
  border: 1px solid green;
  border-radius: 1rem;
}
</style>
