import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'
import SubmitResponse from '../pages/SubmitResponse.vue'
import AdminPanel from '../pages/AdminPanel.vue'
import NotificationCenter from '../pages/NotificationCenter.vue'
import SubmitApplication from '@/pages/SubmitApplication.vue'

const routes = [
  {
    path: '/', name: 'Home', component: HomePage
  },
  {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
  },
  { path: '/phan-hoi', name: 'PhanHoi', component: SubmitResponse },
  { path: '/quan-tri', name: 'QuanTri', component: AdminPanel },
  { path: '/thong-bao', name: 'ThongBao', component: NotificationCenter },
  { path: '/doanh-nghiep', name: 'DoanhNghiep', component: SubmitApplication }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
