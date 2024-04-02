import { api } from ".";
import type { AxiosResponse } from "axios";
import type { BeltInterface } from "~/types/belts";

interface BeltService {
  getAll: () => Promise<BeltInterface[]>;
  create: (belt: any) => Promise<BeltInterface>;
  getById: (id: number) => Promise<BeltInterface>;
  deleteById: (id: number) => void;
  updateById: (id: number, payload: BeltInterface) => void;
}

export const Belt: BeltService = {
  getAll: async () => {
    const {
      data: { data },
    } = await api.get<AxiosResponse<BeltInterface[]>>("/belts");
    return data;
  },
  create: async (belt) => {
    const {
      data: { data },
    } = await api.post<AxiosResponse<BeltInterface>>("/belts", belt);
    return data;
  },
  getById: async (id) => {
    const {
      data: { data },
    } = await api.get<AxiosResponse<BeltInterface>>("/belts/" + id);
    return data;
  },
  deleteById: async (id: number) => {
    await api.delete("/belts/" + id);
  },
  updateById: async (id, payload) => {
    await api.put("/belts/" + id, payload);
  },
};
