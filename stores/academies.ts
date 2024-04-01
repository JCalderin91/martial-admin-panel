import { defineStore } from "pinia";
import { Academy } from "~/services/academies";
import type { AcademyInterface } from "~/types/academy";

interface State {
  academies: AcademyInterface[];
  academy: AcademyInterface | null;
}

export const useAcademiesStore = defineStore("counter", {
  state: (): State => ({
    academies: [],
    academy: null,
  }),
  actions: {
    async getAll() {
      this.academies = [];
      const data = await Academy.getAll();
      this.academies = [...data];
    },
    async create(acadeny: any) {
      this.academy = null;
      const data = await Academy.create(acadeny);
      this.academy = data;
    },
    async getById(id: number) {
      try {
        this.academy = null;
        const data = await Academy.getById(id);
        this.academy = data;
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async deleteAcademyById(id: number) {
      try {
        this.academy = null;
        await Academy.deleteById(id);
        this.getAll();
      } catch (error) {
        throw new Error("Can't delete");
      }
    },
    async updateById(id: number, payload: any) {
      try {
        this.academy = null;
        await Academy.updateById(id, payload);
        this.getAll();
      } catch (error) {
        throw new Error("Can't delete");
      }
    },
  },
});
