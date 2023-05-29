import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoursesView from '@/views/course/CoursesView.vue'
import CourseCreate from '@/views/course/CourseCreate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/courses',
    name: 'courses.index',
    component: CoursesView
  }, {
    path: '/course/',
    name: 'course.create',
    component: CourseCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
