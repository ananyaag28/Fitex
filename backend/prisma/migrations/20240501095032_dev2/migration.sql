/*
  Warnings:

  - Added the required column `recipeId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_cookId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderAccepted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "orderPlaced" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "recipeId" BIGINT NOT NULL,
ALTER COLUMN "cookId" SET DATA TYPE BIGINT;
