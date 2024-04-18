-- AlterTable
ALTER TABLE "doctorTimeSlots" ALTER COLUMN "timeSlots" SET DATA TYPE TEXT[];

-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "services" SET DEFAULT ARRAY[]::VARCHAR(50)[],
ALTER COLUMN "specialization" SET DEFAULT ARRAY[]::VARCHAR(50)[];
