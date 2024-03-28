import { defineStore } from "pinia";
import { Student } from "~/services/students";

export const useStudentStore = defineStore("counter", () => {
  let students: any[] = reactive([]);

  async function getStudents() {
    const data = await Student.getStudents();

    const dataMapper = data.map((user) => {
      return {
        name: user.username,
        lastName: user.name,
        belt: "Amarillo",
        blood: "A+",
      };
    });
    students.push(...dataMapper);
  }

  return { students, getStudents };
});
