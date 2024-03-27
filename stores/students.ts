import { defineStore } from 'pinia'

export const useStudentStore = defineStore('counter', () => {
    let students:any[] = reactive([])
    
    async function getStudents(){
      
      const data  = await $fetch("https://jsonplaceholder.typicode.com/users") as any;
      
      const dataMapper = data.map((user:any) => {
        return {
          name: user.username,
          lastName: user.name,
          belt: "Amarillo",
          blood: "A+",
        };
      });
      students.push(...dataMapper)
    }
  
    return { students, getStudents }
  })

