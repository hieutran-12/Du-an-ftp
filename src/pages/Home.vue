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
            <p class="highlight-text">Tạm ngưng hoạt động</p>
          </div>
      </v-col>
    </v-row>
    <div style="display: grid;">
        <div class="title">
          <img src="https://quanlytin.emdep.vn/Share/Image/2023/11/29/dau-cham-than-co-y-nghia-gi-113039567.jpg">
          <p>Dịch vụ thông tin</p>
        </div>
        <div class="title">
          <img src="https://quanlytin.emdep.vn/Share/Image/2023/11/29/dau-cham-than-co-y-nghia-gi-113039567.jpg">
          <p>Dịch vụ thông tin</p>
        </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
<style>
.highlight-text {
  background-color: #1b8181;
  padding: 12px 16px;
  border-radius: 8px;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
}
.title{
  background-color: aqua;
}
img{
  width: 200px;
  height: 200px;
}
p{
  text-align: center;
  color: #ffffff;
}
</style>