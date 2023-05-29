<template>
    <div>
        <h2>Crie um novo curso</h2>

        <form action="#" method="post" @submit.prevent="createCourse">
            <label for="name">
                Titulo
                <input type="text" id="name" placeholder="Coloque o titulo aqui" v-model="course.name">
            </label>
            <label for="description">
                Descrição
                <textarea id="description" cols="30" placeholder="Coloque a descrição aqui" v-model="course.description">
                </textarea>
            </label>
            <button type="submit" :disabled="course.loading">
                <span v-if="course.loading">Enviando...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import CourseService from '@/services/CourseService'
import router from '@/router'

export default {
    name: 'CourseCreate',

    setup() {
        const course = reactive({
            name: '',
            description: '',
            loading: false
        })

        const createCourse = () => {
            course.loading = true
            CourseService.createCourse({...course})
                .then(() => router.push({ name: 'courses.index' }))
                .finally(() => course.loading = false)
        }

        return {
            createCourse,
            course
        }
    },
}
</script>
