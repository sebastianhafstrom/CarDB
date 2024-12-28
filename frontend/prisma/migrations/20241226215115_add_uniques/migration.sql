/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `CarBrand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `CarModel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CarBrand_slug_key" ON "CarBrand"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarModel_slug_key" ON "CarModel"("slug");
