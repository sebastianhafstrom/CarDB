import { brand, car, user } from "@/types/types";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: { "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY },
});

type getCarModelsParams = {
  search?: string;
  bodyTypes?: string[];
  brands?: string[];
  fuelTypes?: string[];
};

export const getCarModels = async ({
  search,
  bodyTypes,
  brands,
  fuelTypes,
}: getCarModelsParams): Promise<car[]> => {
  const response = await api.get<car[]>("/models", {
    params: {
      search,
      bodyTypes: bodyTypes?.join(","),
      brands: brands?.join(","),
      fuelTypes: fuelTypes?.join(","),
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

export const loginUser = async (email: string, password: string) => {
  const response = await api.post<user>("/auth/login", {
    email,
    password,
  });
  return response.data;
};
