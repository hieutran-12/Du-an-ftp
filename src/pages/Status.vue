<template>
  <v-container class="py-10">
    <v-card class="pa-6" elevation="3">
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="8">
          <h2 class="text-h5 font-weight-bold mb-4">Trạng thái hồ sơ</h2>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >Mã hồ sơ:</v-list-item-title
                >
                <v-list-item-subtitle>{{ hoSo.maHoSo }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >Ngày nộp:</v-list-item-title
                >
                <v-list-item-subtitle>{{ hoSo.ngayNop }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >Trạng thái:</v-list-item-title
                >
                <v-list-item-subtitle>
                  <v-chip color="primary" text-color="white">
                    {{ hoSo.trangThai }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <v-btn color="primary" @click="getTrangThaiHoSo"
            >Cập nhật trạng thái</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

const hoSo = reactive({
  trangThai: "Đã tiếp nhận",
  ngayNop: "2025-07-01",
  maHoSo: "HS20250701XYZ",
});

const getTrangThaiHoSo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // giả lập gọi API có api thì thay vô
  hoSo.trangThai = "Đang xử lý";
};
</script>

<style scoped>
.text-h5 {
  font-size: 24px;
}
</style>
