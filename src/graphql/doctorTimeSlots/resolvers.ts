import { doctorTimeSlots, doctors } from "@prisma/client";
import DoctorService from "../../services/DoctorService";
import _ from "lodash";
import DoctorsRepository from "../../repository/doctors";
import DoctorTimeSlotsRepository from "../../repository/doctorTimeSlots";
import DoctorTimeSlotsService from "../../services/DoctorTimeSlotsService";

const doctorTimeSlotRepo = new DoctorTimeSlotsRepository();
const doctorTimeSlotService = new DoctorTimeSlotsService(doctorTimeSlotRepo);

const queries = {
  findAllTimeSlots: () => {
    return doctorTimeSlotService.findAllTimeSlots();
  },
  findDoctorTimeSlots: (_: void, { id }: { id: string }) => {
    return doctorTimeSlotService.findDoctorTimeSlots(parseInt(id));
  },
  deleteDoctorTimeSlots: (_: void, { id }: { id: string }) => {
    return doctorTimeSlotService.deleteDoctorTimeSlots(parseInt(id));
  },
};

const mutations = {
  createDoctorTimeSlots: async (
    _: void,
    { data }: { data: doctorTimeSlots }
  ) => {
    return doctorTimeSlotService.createDoctorTimeSlots(data);
  },
  updateDoctorTimeSlots: async (
    _: void,
    { id, data }: { id: string; data: any }
  ) => {
    return doctorTimeSlotService.updateDoctorTimeSlots(parseInt(id), data);
  },
};

export const resolvers = { queries, mutations };
