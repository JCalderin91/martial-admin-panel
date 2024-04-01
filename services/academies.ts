import { api } from ".";
import type { AxiosResponse } from "axios";
import type { AcademyInterface } from "~/types/academy";

interface AcademyService {
  getAll: () => Promise<AcademyInterface[]>;
  create: (academy: any) => Promise<AcademyInterface>;
  getById: (id: number) => Promise<AcademyInterface>;
  deleteById: (id: number) => void;
  updateById: (id: number, payload: AcademyInterface) => void;
}

export const Academy: AcademyService = {
  getAll: async () => {
    const {
      data: { data },
    } = await api.get<AxiosResponse<AcademyInterface[]>>("/academies");
    return data;
  },
  create: async (academy) => {
    const {
      data: { data },
    } = await api.post<AxiosResponse<AcademyInterface>>("/academies", academy);
    return data;
  },
  getById: async (id) => {
    const {
      data: { data },
    } = await api.get<AxiosResponse<AcademyInterface>>("/academies/" + id);
    return data;
  },
  deleteById: async (id: number) => {
    await api.delete("/academies/" + id);
  },
  updateById: async (id, payload) => {
    await api.put("/academies/" + id, payload);
  },
};
