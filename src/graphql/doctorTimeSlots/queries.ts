export const queries = `#graphql
      findAllTimeSlots:[DoctorTimeSlot],
      findDoctorTimeSlots(id:String!):DoctorTimeSlot
      deleteDoctorTimeSlots(id:String!):DoctorTimeSlot
`;
