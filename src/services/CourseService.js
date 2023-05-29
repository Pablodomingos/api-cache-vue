import axios from "axios";

export default class CourseService {
    static async getCourses() {
        return axios.get("/courses");
    }

    static async createCourse(params) {
        return axios.post("/course", params);
    }
}