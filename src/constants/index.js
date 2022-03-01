export const PAGE_LIMIT = 3;

export const MAP_VALUES = {
    LATITIUDE: 12.96651,
    LONGITUDE: 77.61431
};

export const USER_TYPES = {
    GUEST: "GUEST",
    REGISTERED: "REGISTERED"
};

export const SERVICE_SELECTION = "SERVICE_SELECTION";
export const SLOT_SELECTION = "SLOT_SELECTION";
export const USER_INFORMATION = "USER_INFORMATION";
export const BOOKING_CONFIRMATION = "BOOKING_CONFIRMATION";

export const DOC_ID = "92b97397-3eac-42a7-9fea-aa0ccb21cb3c";

export const API_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";

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
    BOOKING_CONFIRMATION: {
        id: 4,
        name: "Confirmation",
        type: BOOKING_CONFIRMATION
    }
};
export const appointmentStepsArray = Object.keys(appointmentSteps);

export const features = [
    "PreConception counselling",
    "Antenatal care",
    "Postnatal care",
    "Contraception",
    "Menstrual problems/PCOS",
    "Perimenopausal health issues",
    "Nutritional diet advice",
    "Treatment of recurrent miscarriage",
    "Infertility",
    "Gynaecological problems (fibroid uterus.endometriosis,uterine anomalies)"
];

export const services = [
    {
        name: "Pregnancy Consultation",
        time: "30 min",
        price: "Rs 500",
        img: "/assets/images/pregnancy-consultation.jpg"
    },
    {
        name: "Fertility Consultation",
        time: "30 min",
        price: "Rs 500",
        img: "/assets/images/fertility-consultation.jpg"
    },
    {
        name: "Gynaec Consultation",
        time: "30 min",
        price: "Rs 500",
        img: "/assets/images/common-consultation.jpg"
    }
];

export const slotsData = {
    "Morning": [
        { text: "8:00 AM", hours: 8, minutes: 0 },
        { text: "8:30 AM", hours: 8, minutes: 30 },
        { text: "9:00 AM", hours: 9, minutes: 0 },
        { text: "9:30 AM", hours: 9, minutes: 30 },
        { text: "10:00 AM", hours: 10, minutes: 0 },
        { text: "10:30 AM", hours: 10, minutes: 30 }
    ],
    "Evening": [
        { text: "5:00 PM", hours: 17, minutes: 0 },
        { text: "5:30 PM", hours: 17, minutes: 30 },
        { text: "6:00 PM", hours: 18, minutes: 0 },
        { text: "6:30 PM", hours: 18, minutes: 30 },
        { text: "7:00 PM", hours: 19, minutes: 0 },
        { text: "7:30 PM", hours: 19, minutes: 30 }
    ],
};

export const appointmentLocations = ["In Person", "Online Consultation"];

