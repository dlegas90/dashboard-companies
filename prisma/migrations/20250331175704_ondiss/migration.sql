/*
  Warnings:

  - Changed the type of `allDay` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "start" SET DATA TYPE TEXT,
DROP COLUMN "allDay",
ADD COLUMN     "allDay" TIMESTAMP(3) NOT NULL;
