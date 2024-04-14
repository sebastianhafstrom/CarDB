import axios from 'axios';
import { brand, car, createBrandRequest, createCarRequest } from './apiTypes';

export async function fetchBrands(): Promise<brand[]> {
    const response = await axios.get<brand[]>('http://localhost:8080/brands');
    return response.data;
}

export async function fetchBrandBySlug(slug: string) {
    const response = await axios.get<brand>(
        `http://localhost:8080/brands/${slug}`
    );
    return response.data;
}

export async function createCarBrand(data: createBrandRequest) {
    const response = await axios.post<brand>(
        'http://localhost:8080/brands',
        data
    );
    return response.data;
}

export async function fetchCars(brandIds: string[] = []): Promise<car[]> {
    const response = await axios.get<car[]>('http://localhost:8080/cars', {
        params: { brandIds: brandIds.join(',') },
    });
    return response.data;
}

export async function fetchCarBySlug(slug: string) {
    const response = await axios.get<car>(`http://localhost:8080/cars/${slug}`);
    return response.data;
}

export async function createCar(data: createCarRequest) {
    const response = await axios.post<car>('http://localhost:8080/cars', data);
    return response.data;
}
