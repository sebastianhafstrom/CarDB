import { EmissionStandard, FuelType, Transmission } from "../src/types";

export const engines: {
  id: string;
  name: string;
  fuelType: FuelType;
  power: number;
  transmission: Transmission;
  fourWheelDrive: boolean;
  emissionStandard: EmissionStandard;
}[] = [
  {
    id: "fc939f54-d3c7-4515-b485-0bf96b9ec866",
    name: "1.5 TSI m-hev",
    fuelType: FuelType.HYBRID,
    power: 150,
    transmission: Transmission.AUTOMATIC,
    fourWheelDrive: false,
    emissionStandard: EmissionStandard.EURO_6,
  },
  {
    id: "496cc0e0-9cf1-430a-8b1c-c1f57459639f",
    name: "2.0 TDI",
    fuelType: FuelType.DIESEL,
    power: 193,
    transmission: Transmission.AUTOMATIC,
    fourWheelDrive: true,
    emissionStandard: EmissionStandard.EURO_6,
  },
  {
    id: "ef7636a6-5b9d-42ba-b592-3ab22d048fe6",
    name: "1.5 TSI iV",
    fuelType: FuelType.PHEV,
    power: 204,
    transmission: Transmission.AUTOMATIC,
    fourWheelDrive: false,
    emissionStandard: EmissionStandard.EURO_6,
  },
  {
    id: "e8daa44a-fe89-47eb-a8b7-267766bd1790",
    name: "2.0 TSI",
    fuelType: FuelType.PETROL,
    power: 204,
    transmission: Transmission.AUTOMATIC,
    fourWheelDrive: true,
    emissionStandard: EmissionStandard.EURO_6,
  },
  {
    id: "dd836956-bd80-401f-82d7-d86bd70b2c8c",
    name: "2.0 TSI",
    fuelType: FuelType.PETROL,
    power: 265,
    transmission: Transmission.AUTOMATIC,
    fourWheelDrive: true,
    emissionStandard: EmissionStandard.EURO_6,
  },
];
