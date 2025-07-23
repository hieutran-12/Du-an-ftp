<template>
  <v-container>
    <v-card>
      <v-card-title>Trang quản trị hệ thống</v-card-title>
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab>Hồ sơ chờ duyệt</v-tab>
          <v-tab>Người dùng</v-tab>
          <v-tab>Thống kê</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <!-- Danh sách hồ sơ duyệt -->
            <v-data-table :headers="headers" :items="hoSoList" class="mt-4"></v-data-table>
          </v-tab-item>
          <v-tab-item>
            <!-- Quản lý người dùng -->
            <p>Thông tin người dùng...</p>
          </v-tab-item>
          <v-tab-item>
            <!-- Thống kê -->
            <p>Biểu đồ / Thống kê...</p>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref(0)
const headers = [
  { text: 'Tên doanh nghiệp', value: 'ten' },
  { text: 'Trạng thái', value: 'trangthai' },
  { text: 'Thao tác', value: 'actions', sortable: false }
]
const hoSoList = [
  { ten: 'Công ty ABC', trangthai: 'Chờ duyệt' },
  { ten: 'Công ty XYZ', trangthai: 'Bị từ chối' }
]
</script>
