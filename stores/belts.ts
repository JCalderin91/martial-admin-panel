import { defineStore } from "pinia";
import { Belt } from "~/services/belts";
import type { BeltInterface } from "~/types/belts";

interface State {
  belts: BeltInterface[];
  belt: BeltInterface | null;
}

export const useBeltsStore = defineStore("counter", {
  state: (): State => ({
    belts: [],
    belt: null,
  }),
  actions: {
    async getAll() {
      this.belts = [];
      const data = await Belt.getAll();
      this.belts = [...data];
    },
    async create(acadeny: any) {
      this.belt = null;
      const data = await Belt.create(acadeny);
      this.belt = data;
    },
    async getById(id: number) {
      try {
        this.belt = null;
        const data = await Belt.getById(id);
        this.belt = data;
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async deleteById(id: number) {
      try {
        this.belt = null;
        await Belt.deleteById(id);
        this.getAll();
      } catch (error) {
        throw new Error("Can't delete");
      }
    },
    async updateById(id: number, payload: any) {
      try {
        this.belt = null;
        await Belt.updateById(id, payload);
        this.getAll();
      } catch (error) {
        throw new Error("Can't delete");
      }
    },
  },
});
