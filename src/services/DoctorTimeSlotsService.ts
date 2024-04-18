import {
  CreateDoctorTimeSlot,
  DoctorTimeSlotsRepositoryInterface,
  UpdateDoctorTimeSlot,
} from "../interfaces/DoctorTimeSlotsRepositoryInterface";

class DoctorTimeSlotsService {
  private doctorTimeSlots: DoctorTimeSlotsRepositoryInterface;

  constructor(doctorTimeSlots: DoctorTimeSlotsRepositoryInterface) {
    this.doctorTimeSlots = doctorTimeSlots;
  }

  async findAllTimeSlots() {
    const doctorTimeSlots = await this.doctorTimeSlots.findAllTimeSlots();
    return doctorTimeSlots;
  }

  async findDoctorTimeSlots(id: number) {
    const doctorTimeSlots = await this.doctorTimeSlots.findDoctorTimeSlots(id);
    return doctorTimeSlots;
  }

  async updateDoctorTimeSlots(id: number, data: UpdateDoctorTimeSlot) {
    const doctorTimeSlots = await this.doctorTimeSlots.updateDoctorTimeSlots(
      id,
      data
    );
    return doctorTimeSlots;
  }

  async createDoctorTimeSlots(data: CreateDoctorTimeSlot) {
    const doctorTimeSlots = await this.doctorTimeSlots.createDoctorTimeSlots(
      data
    );
    return doctorTimeSlots;
  }

  async deleteDoctorTimeSlots(id: number) {
    const doctorTimeSlots = await this.doctorTimeSlots.deleteDoctorTimeSlots(
      id
    );
    return doctorTimeSlots;
  }
}

export default DoctorTimeSlotsService;
