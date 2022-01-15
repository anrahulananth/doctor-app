export const SAMPLE_CONSTANT = 10000;

export const USER_TYPES = {
    GUEST: "GUEST",
    REGISTERED: "REGISTERED"
};

export const SERVICE_SELECTION = "SERVICE_SELECTION";
export const SLOT_SELECTION = "SLOT_SELECTION";
export const USER_INFORMATION = "USER_INFORMATION";
export const APPOINTMENT_CONFIRMATION = "APPOINTMENT_CONFIRMATION";

export const appointmentSteps = {
    SERVICE_SELECTION: {
        id: 1,
        name: "Service Selection",
        type: SERVICE_SELECTION
    },
    SLOT_SELECTION: {
        id: 2,
        name: "Choose a Slot",
        type: SLOT_SELECTION
    },
    USER_INFORMATION: {
        id: 3,
        name: "User Information",
        type: USER_INFORMATION
    },
    APPOINTMENT_CONFIRMATION: {
        id: 4,
        name: "Confirmation",
        type: APPOINTMENT_CONFIRMATION
    }
};
export const appointmentStepsArray = Object.keys(appointmentSteps);
