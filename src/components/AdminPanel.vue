<template>
  <v-container>
    <v-card>
      <v-card-title>Quản trị người dùng</v-card-title>
      <v-data-table :items="users" :headers="headers"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Tên người dùng', value: 'name' },
        { text: 'Vai trò', value: 'role' }
      ],
      users: [
        { id: 1, name: 'Nguyễn Văn A', role: 'Admin' },
        { id: 2, name: 'Lê Thị B', role: 'User' }
      ]
    };
  }
}
</script>
