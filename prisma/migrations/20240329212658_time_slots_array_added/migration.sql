/*
  Warnings:

  - The `time` column on the `doctorTimeSlots` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "doctorTimeSlots" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3)[];

-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "services" SET DEFAULT ARRAY[]::VARCHAR(50)[],
ALTER COLUMN "specialization" SET DEFAULT ARRAY[]::VARCHAR(50)[];
