/*
  Warnings:

  - You are about to drop the column `time` on the `doctorTimeSlots` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctorTimeSlots" DROP COLUMN "time",
ADD COLUMN     "timeSlots" TIMESTAMP(3)[];

-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "services" SET DEFAULT ARRAY[]::VARCHAR(50)[],
ALTER COLUMN "specialization" SET DEFAULT ARRAY[]::VARCHAR(50)[];
