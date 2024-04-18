export interface CreateDoctorTimeSlot {
  doctor_id: number;
  weekday: string;
  timeSlots: string[];
}

export interface UpdateDoctorTimeSlot {
  doctor_id?: number;
  weekday?: string;
  timeSlots?: string[];
}

export interface DoctorTimeSlot {
  id: number;
  doctor_id: number;
  weekday: string;
  timeSlots: string[];
}

export interface ReturnError {
  error: string;
}

export interface DoctorTimeSlotsRepositoryInterface {
  findAllTimeSlots(): Promise<DoctorTimeSlot[]>;
  findDoctorTimeSlots(id: number): Promise<DoctorTimeSlot[] | null>;
  deleteDoctorTimeSlots(id: number): Promise<DoctorTimeSlot | null>;
  createDoctorTimeSlots(
    data: CreateDoctorTimeSlot
  ): Promise<DoctorTimeSlot | ReturnError>;
  updateDoctorTimeSlots(
    id: number,
    data: UpdateDoctorTimeSlot
  ): Promise<DoctorTimeSlot>;
}
