import { brand, car } from "@/types/types";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: { "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY },
});

export const getCarModels = async (
  search: string,
  bodyTypes: string[]
): Promise<car[]> => {
  const response = await api.get<car[]>("/models", {
    params: {
      search,
      bodyTypes: bodyTypes.join(","),
    },
  });
  return response.data;
};

export const getCarModel = async (slug: string): Promise<car> => {
  const response = await api.get<car>(`/models/${slug}`);
  return response.data;
};

export const getBrands = async (): Promise<brand[]> => {
  const response = await api.get<brand[]>("/brands");
  return response.data;
};

export const getBrand = async (slug: string): Promise<brand> => {
  const response = await api.get<brand>(`/brands/${slug}`);
  return response.data;
};
