import _ from "lodash";
import {
  CreateDoctorTimeSlot,
  DoctorTimeSlotsRepositoryInterface,
  UpdateDoctorTimeSlot,
} from "../interfaces/DoctorTimeSlotsRepositoryInterface";
import BaseRepository from "./baseRepository";
import { prisma } from "..";

class DoctorTimeSlotsRepository
  extends BaseRepository
  implements DoctorTimeSlotsRepositoryInterface
{
  constructor() {
    super();
  }

  async findAllTimeSlots() {
    const doctors = prisma.doctorTimeSlots.findMany();
    return doctors;
  }

  async findDoctorTimeSlots(id: number) {
    return prisma.doctorTimeSlots.findMany({
      where: { doctor_id: id },
    });
  }

  async updateDoctorTimeSlots(id: number, data: UpdateDoctorTimeSlot) {
    return prisma.doctorTimeSlots.update({
      where: {
        id,
      },
      data: data,
    });
  }

  async createDoctorTimeSlots(data: CreateDoctorTimeSlot) {
    // const inputData = {...data,doctor_id:parseInt(data?.doctor_id)}
    try {
      const createdDoctor = await prisma.doctorTimeSlots.create({
        data,
      });
      return createdDoctor;
    } catch (error) {
      console.log(error);
      return {
        error: "Doctor could not be created!",
      };
    }
  }

  async deleteDoctorTimeSlots(id: number) {
    return prisma.doctorTimeSlots.delete({
      where: {
        id,
      },
    });
  }
}

export default DoctorTimeSlotsRepository;
