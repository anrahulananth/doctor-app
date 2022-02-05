import CustomCalender from "./CustomCalender";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import { FiChevronRight, FiChevronLeft, FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";
const slotsData = {
    "Morning": ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"],
    "Evening": ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
};
const SelectSlot = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="flex flex-row space-x-8 my-8">
            <div className="basis-2/5 border shadow-cardshadow1 border-background4 rounded-md self-start">
                <div className="text-lg text-text2 font-bold p-8">
                    Select a date
                </div>
                <div className="border-t border-background4" />
                <div className="bg-white p-6 rounded-md">
                    <CustomCalender
                        calendarType="US"
                        onChange={onChange}
                        value={value}
                        minDate={new Date()}
                        prev2Label={false}
                        next2Label={false}
                        prevLabel={<FiChevronLeft />}
                        nextLabel={<FiChevronRight />}
                    />
                </div>
            </div>
            <div className="basis-3/5 bg-white border shadow-cardshadow1 border-background4 rounded-md p-6">
                <div className="text-lg text-text2 font-bold">Type of Appointment</div>
                <div className="flex mt-4 justify-start space-x-2">
                    <button className="basis-1/2 rounded-md border border-background8 text-text1 flex items-center justify-start p-2 hover:border-primary1">
                        <BiRadioCircleMarked className="text-primary1" />&nbsp;&nbsp;In Person
                    </button>
                    <button className="basis-1/2 rounded-md border border-background8 text-text1 flex items-center justify-start p-2 hover:border-primary1">
                        <BiRadioCircle />&nbsp;&nbsp;Online Consultation
                    </button>
                </div>
                <div className="text-md text-text2 font-bold mt-8">Choose a Slot</div>
                {
                    Object.keys(slotsData).map((timeOfDay) => (
                        <div key={timeOfDay} className="mt-4">
                            <div className="flex items-center space-x-2 text-md text-text2 font-semibold">
                                {timeOfDay === "Morning" ? <FiSun className="text-background6" /> : <FiMoon className="text-background6" />}<div>{timeOfDay}</div>
                            </div>
                            <div className="border border-background8 my-4" />
                            <div className="flex flex-wrap justify-start mb-10">
                                {
                                    slotsData[timeOfDay].map((slot) => (
                                        <button key={slot} className="border border-background8 rounded-md text-text2 py-2 px-4 m-2 hover:border-primary1">
                                            {slot}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SelectSlot;
