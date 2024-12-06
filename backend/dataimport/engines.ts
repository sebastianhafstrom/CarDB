import { FuelType } from "../src/types";

export const engines: {
  id: string;
  name: string;
  fuelType: FuelType;
  power: number;
}[] = [
  {
    id: "fc939f54-d3c7-4515-b485-0bf96b9ec866",
    name: "1.5 TSI m-hev",
    fuelType: FuelType.HYBRID,
    power: 150,
  },
  {
    id: "496cc0e0-9cf1-430a-8b1c-c1f57459639f",
    name: "2.0 TDI",
    fuelType: FuelType.DIESEL,
    power: 193,
  },
  {
    id: "ef7636a6-5b9d-42ba-b592-3ab22d048fe6",
    name: "1.5 TSI iV",
    fuelType: FuelType.PHEV,
    power: 204,
  },
  {
    id: "e8daa44a-fe89-47eb-a8b7-267766bd1790",
    name: "2.0 TSI",
    fuelType: FuelType.PETROL,
    power: 204,
  },
  {
    id: "dd836956-bd80-401f-82d7-d86bd70b2c8c",
    name: "2.0 TSI",
    fuelType: FuelType.PETROL,
    power: 265,
  },
];
