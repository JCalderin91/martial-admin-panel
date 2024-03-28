import type { GetStudentsResponse } from "~/types/student";

export const Student = {
  getStudents: async function getStudents() {
    return await $fetch<GetStudentsResponse[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  },
};
