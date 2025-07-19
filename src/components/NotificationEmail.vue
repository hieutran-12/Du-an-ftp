<template>
  <v-container>
    <v-card class="pa-4">
      <v-text-field v-model="email" label="Email người nhận" outlined></v-text-field>
      <v-text-field v-model="subject" label="Tiêu đề" outlined></v-text-field>
      <v-textarea v-model="content" label="Nội dung" outlined></v-textarea>
      <v-btn color="success" @click="sendEmail">Gửi Email</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subject: '',
      content: ''
    };
  },
  methods: {
    sendEmail() {
      alert(`Đã gửi email đến: ${this.email}`);
      // Gọi API gửi email tại backend
    }
  }
}
</script>
