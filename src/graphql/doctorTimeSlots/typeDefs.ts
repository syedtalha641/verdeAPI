export const typeDefs = `#graphql
    type DoctorTimeSlot{
        id:ID
        doctor_id: Int
        weekday: String
        timeSlots: [String]
    }
    input DoctorTimeSlotInput {
        doctor_id: Int!
        weekday: String!
        timeSlots: [String]!
    }
    input DoctorTimeSlotInputUpdate {
        doctor_id: Int
        weekday: String
        timeSlots: [String]
    }
`;
