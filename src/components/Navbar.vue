<script lang="ts" setup>
import HoverMenu from "./HoverMenu.vue";
</script>

<template>
  <v-app-bar app color="#1976d2" dark flat style="overflow: visible">
    <!-- Logo và tiêu đề -->
    <v-toolbar-title class="d-flex align-center">
      <v-icon class="mr-2" size="24">mdi-office-building</v-icon>
      <span class="font-weight-bold text-h6">ĐĂNG KÝ DOANH NGHIỆP</span>
    </v-toolbar-title>

    <v-spacer />

    <!-- Menu chính -->
    <div class="d-flex align-center">
      <router-link to="/Status">
        <!-- Trang chủ -->
        <HoverMenu title="Trang chủ" class="menu-btn" />
      </router-link>

      <!-- Giới thiệu -->
      <router-link to="/Introduce">
        <HoverMenu title="Giới thiệu" class="menu-btn" />
      </router-link>
      <!-- Dịch vụ công -->
      <HoverMenu title="Dịch vụ công" class="menu-btn">
        <v-list class="pa-2" min-width="250">
          <v-list-item link>
            <v-list-item-title>Đăng ký doanh nghiệp</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Thay đổi đăng ký</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Giải thể doanh nghiệp</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Tạm ngừng hoạt động</v-list-item-title>
          </v-list-item>
        </v-list>
      </HoverMenu>

      <!-- Hỗ trợ -->
      <HoverMenu title="Hỗ trợ" class="menu-btn">
        <v-list class="pa-2" min-width="200">
          <v-list-item link>
            <v-list-item-title>Hướng dẫn sử dụng</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Liên hệ</v-list-item-title>
          </v-list-item>
        </v-list>
      </HoverMenu>

      <!-- Tin tức -->
      <HoverMenu title="Tin tức" class="menu-btn">
        <v-list class="pa-2" min-width="200">
          <v-list-item link>
            <v-list-item-title>Tin tức mới</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Thông báo</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Văn bản pháp luật</v-list-item-title>
          </v-list-item>
        </v-list>
      </HoverMenu>

      <!-- Văn bản pháp luật -->
      <HoverMenu title="Văn bản pháp luật" class="menu-btn">
        <v-list class="pa-2" min-width="220">
          <v-list-item link>
            <v-list-item-title>
              <a
                href="https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Luat-Doanh-nghiep-so-59-2020-QH14-427301.aspx"
                target="_blank"
              >
                Luật Doanh nghiệp</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Nghị định hướng dẫn</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Thông tư quy định</v-list-item-title>
          </v-list-item>
        </v-list>
      </HoverMenu>
    </div>

    <!-- Tìm kiếm và đăng nhập -->
    <v-spacer />

    <div
      class="d-flex align-center"
      style="gap: 8px; flex-shrink: 0; min-width: 400px"
    >
      <!-- Ô tìm kiếm -->
      <v-text-field
        v-model="searchText"
        placeholder="Tìm kiếm..."
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="compact"
        hide-details
        class="search-field"
        style="width: 200px; flex-shrink: 0"
      />

      <!-- Đăng nhập -->
      <v-btn
        variant="outlined"
        color="white"
        class="text-white"
        size="small"
        style="min-width: 85px; flex-shrink: 0; height: 32px"
      >
        ĐĂNG XUẤT
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  position: static !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menu-btn {
  position: relative;
  font-weight: 500;
  margin: 0 12px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  color: white;
}

.menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.search-field :deep(.v-field) {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
}

.search-field :deep(.v-field__input) {
  color: #333;
  font-size: 14px;
}

.search-field :deep(.v-field__prepend-inner) {
  color: #666;
}

.text-blue {
  color: #1976d2 !important;
}
a {
  text-decoration: none;
  color: black;
}

/* Animation cho hover effect */
@keyframes slideUp {
  from {
    transform: translateY(2px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.menu-btn:hover {
  animation: slideUp 0.2s ease-out;
}

/* Responsive */
@media (max-width: 1200px) {
  .search-field {
    max-width: 180px !important;
    min-width: 150px !important;
  }
}

@media (max-width: 960px) {
  .menu-btn {
    margin: 0 8px;
    padding: 8px 12px;
    font-size: 14px;
  }

  .search-field {
    max-width: 140px !important;
    min-width: 120px !important;
  }
}
</style>
