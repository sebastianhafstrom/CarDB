import { brand, car, user } from "@/types/types";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  withCredentials: true, // Send cookies with the request
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

export const getCarModelsAdmin = async (search: string): Promise<car[]> => {
  const response = await api.get<car[]>("/admin/models", {
    params: {
      search,
    },
  });
  return response.data;
};

export const getCarModel = async (slug: string): Promise<car> => {
  const response = await api.get<car>(`/models/${slug}`);
  return response.data;
};

type upsertCarModelParams = {
  name: string;
  brandId: string;
  bodyType: string;
  length: string;
  width: string;
  height: string;
  wheelbase: string;
  imageUrl: string;
  website: string;
  slug: string;
};

export const createCarModel = async (data: upsertCarModelParams) => {
  await api.post("/admin/models", data);
};

export const updateCarModel = async (
  id: string,
  data: upsertCarModelParams
) => {
  await api.put(`/admin/models/${id}`, data);
};

export const getBrands = async (): Promise<brand[]> => {
  const response = await api.get<brand[]>("/brands");
  return response.data;
};

export const getBrand = async (slug: string): Promise<brand> => {
  const response = await api.get<brand>(`/brands/${slug}`);
  return response.data;
};

type upsertCarBrandParams = {
  name: string;
  country: string;
  website: string;
  slug: string;
};

export const createBrand = async (data: upsertCarBrandParams) => {
  await api.post("/admin/brands", data);
};

export const updateBrand = async (id: string, data: upsertCarBrandParams) => {
  await api.put(`/admin/brands/${id}`, data);
};

export const loginUser = async (email: string, password: string) => {
  const response = await api.post<user>("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const logoutUser = async () => {
  await api.post("/auth/logout");
};

export const getMe = async (): Promise<user> => {
  const response = await api.get<user>("/auth/me");
  return response.data;
};

export const getUsers = async (): Promise<user[]> => {
  const response = await api.get<user[]>("/admin/users");
  return response.data;
};

export const createUser = async (email: string, password: string) => {
  await api.post("/admin/users", {
    email,
    password,
  });
};
