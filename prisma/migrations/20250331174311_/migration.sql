/*
  Warnings:

  - Changed the type of `start` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `allDay` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "start",
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
DROP COLUMN "allDay",
ADD COLUMN     "allDay" BOOLEAN NOT NULL;
