<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="10" class="pa-6 rounded-xl">
          <v-card-title class="text-center text-h5 font-weight-bold">
            📋 Nộp hồ sơ đăng ký doanh nghiệp
          </v-card-title>

          <v-form @submit.prevent="submitForm" ref="form">
            <!-- Tên doanh nghiệp -->
            <v-text-field
              v-model="companyName"
              label="📌 Tên doanh nghiệp"
              :rules="[(v) => !!v || 'Bắt buộc']"
              required
              outlined
              class="mb-4"
            ></v-text-field>

            <!-- Tải hồ sơ -->
            <v-file-input
              v-model="file"
              label="📂 Tải lên hồ sơ (PDF, XML)"
              accept=".pdf,.xml"
              show-size
              outlined
              :rules="[(v) => !!v || 'Bắt buộc']"
              class="mb-4"
            ></v-file-input>

            <!-- Ký số -->
            <v-checkbox
              v-model="agreed"
              :rules="[(v) => v || 'Cần xác nhận']"
              label="🔐 Tôi đã thực hiện ký số và xác nhận tính chính xác của hồ sơ"
              class="mb-6"
            ></v-checkbox>

            <!-- Nút nộp -->
            <v-btn
              :loading="loading"
              :disabled="loading"
              block
              color="primary"
              size="large"
              type="submit"
            >
              {{ loading ? "⏳ Đang xử lý..." : "🚀 Nộp hồ sơ đăng ký" }}
            </v-btn>

            <!-- Thông báo thành công -->
            <v-alert
              v-if="success"
              type="success"
              class="mt-4"
              border="start"
              elevation="2"
            >
              ✅ Hồ sơ đã được nộp thành công! Chúng tôi sẽ xử lý trong vòng 5-7
              ngày làm việc.
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const companyName = ref("");
const file = ref(null);
const agreed = ref(false);
const loading = ref(false);
const success = ref(false);

const form = ref(null);

const submitForm = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;

  setTimeout(() => {
    success.value = true;
    loading.value = false;

    // Reset form sau vài giây
    setTimeout(() => {
      companyName.value = "";
      file.value = null;
      agreed.value = false;
      success.value = false;
    }, 3000);
  }, 2000);
};
</script>

<style scoped>
.v-card-title {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
