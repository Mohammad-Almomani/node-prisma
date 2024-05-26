/*
  Warnings:

  - You are about to alter the column `category` on the `Posts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `city` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Posts` MODIFY `category` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `city` VARCHAR(191) NULL;
