<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title>Phản hồi / Bổ sung hồ sơ</v-card-title>
      <v-textarea v-model="message" label="Nội dung phản hồi" outlined></v-textarea>
      <v-file-input v-model="file" label="Đính kèm tệp" outlined></v-file-input>
      <v-btn color="primary" @click="submit">Gửi phản hồi</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      file: null
    };
  },
  methods: {
    submit() {
      alert('Đã gửi phản hồi');
      // Gọi API gửi phản hồi và file đính kèm
    }
  }
}
</script>
