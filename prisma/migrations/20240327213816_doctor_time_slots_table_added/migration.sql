-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "services" SET DEFAULT ARRAY[]::VARCHAR(50)[],
ALTER COLUMN "specialization" SET DEFAULT ARRAY[]::VARCHAR(50)[];

-- CreateTable
CREATE TABLE "doctorTimeSlots" (
    "id" SERIAL NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "weekday" VARCHAR(50) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctorTimeSlots_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "doctorTimeSlots" ADD CONSTRAINT "doctorTimeSlots_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
