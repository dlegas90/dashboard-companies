/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `start` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `allDay` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "comapnyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "timeFormat" SET DATA TYPE TEXT,
DROP COLUMN "start",
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
DROP COLUMN "allDay",
ADD COLUMN     "allDay" BOOLEAN NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
