<template>
  <v-container>
    <v-row>
        <div>
          <h2>
            Thống kê tháng 4/2025 về <br>
            Đăng ký doanh nghiệp
          </h2>
        </div>
      <v-col>
          <div style="margin-left: 100px; font-size: 20px;">
            <p class="highlight-text">Tổng doanh nghiệp thành lập mới: 15.228</p>
              <p class="highlight-text">Doanh nghiệp quay trở lại hoạt động: 9.104</p>
              <p class="highlight-text">Doanh nghiệp giải thể: 1.750</p>
              <p class="highlight-text">Doanh nghiệp tạm ngưng hoạt động: 5.924</p>
            </div>
        </v-col>
      </v-row>
    <div style="background-color: #f0f9ff; padding: 16px;">
    <v-row class="pa-4" dense>
      <v-col>
        <v-card>
          <v-img src="https://media.istockphoto.com/id/962564820/vi/vec-to/d%E1%BA%A5u-ch%E1%BA%A5m-than-trong-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-vector-gi%E1%BB%8Dng-n%C3%B3i-bong-b%C3%B3ng-kh%C3%A1i-ni%E1%BB%87m-os-ch%C3%BA-%C3%BD-ho%E1%BA%B7c-d%E1%BA%A5u-hi%E1%BB%87u.jpg?s=612x612&w=0&k=20&c=Xmht7NABumBXkAbk44x7JemX71QMIgctR0hWVJYFML0=" height="200"></v-img>
          <div class="title">Dịch vụ thông tin</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card to="/doanh-nghiep">
          <v-img src="https://media.istockphoto.com/id/1446976987/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%E1%BA%ABu-%C4%91%C6%A1n-%C4%91%C4%83ng-k%C3%BD.jpg?s=612x612&w=0&k=20&c=Z_8KLjHVsWIhgC7Vh5TlIXyR5eDuTQwNpFFk3cGLShc=" height="200"></v-img>
          <div class="title">Đăng ký doanh nghiệp</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-img src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-reports-icon-for-your-project-png-image_1521526.jpg" height="200"></v-img>
          <div class="title">Báo cáo điện tử</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-img src="https://i-law.vn/uploads/articles/68399/ho_kinh_doanh_la_gi_2702164641.png" height="200"></v-img>
          <div class="title">Đăng ký hộ kinh doanh</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-img src="https://img.pikbest.com/png-images/qiantu/business-handshake-icon_2678293.png!sw800" height="200"></v-img>
          <div class="title">Đăng ký hợp tác xã</div>
        </v-card>
      </v-col>
    </v-row>
    </div>
  </v-container>
</template>
<script>
import { onMounted } from "vue";
import SubmitApplication from "./SubmitApplication.vue";
const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.replace("/Login"); // chỉ chuyển nếu chưa login
  }
});
export default {
  name: 'HomePage',
}
</script>
<style>
.highlight-text {
  background-color: #1cd4d4;
  padding: 12px 16px;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
}
.title{
  text-align: center;
  background-color: aqua;
  color: black;
}
</style>
