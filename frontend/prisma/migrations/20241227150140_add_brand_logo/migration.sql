/*
  Warnings:

  - Added the required column `logoUrl` to the `CarBrand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarBrand" ADD COLUMN     "logoUrl" TEXT NOT NULL;
