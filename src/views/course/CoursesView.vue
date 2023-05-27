<template>
    <h1>Listagem de cursos</h1>

    <div v-if="loading">
        <p>Carregando ...</p>
    </div>

    <ul>
        <li v-for="course in courses" :key="course.id">
            {{ course.title }}
            <div v-for="(module, index) in course.modules" :key="module.id">
                {{ `${index+1} - ${module.name}` }}<br>
            </div>
        </li>
    </ul>
</template>

<script>
import { onMounted, ref } from 'vue'
import CourseService from '@/services/CourseService'

export default {
    name: 'CoursesView',

    setup () {
        const courses = ref([])
        const loading = ref(false)

        onMounted(async () => {
            loading.value = true
            CourseService.getCourses()
                .then(response => courses.value = response.data.data)
                .catch(error => console.log(error))
                .finally(() => loading.value = false)
        })

        return {
            loading,
            courses
        }
    }
}
</script>