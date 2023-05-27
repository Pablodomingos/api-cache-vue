import axios from "axios";

export default class CourseService {
    static async getCourses() {
        return axios.get("/courses");
    }
}