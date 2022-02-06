import CustomCalender from "../Calender";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import { FiChevronRight, FiChevronLeft, FiSun, FiMoon } from "react-icons/fi";
import { useEffect } from "react";
import classNames from "classnames";
import { appointmentStepsArray } from "../../constants";
const slotsData = {
    "Morning": ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"],
    "Evening": ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
};
const appointmentLocations = ["In Person", "Online Consultation"];

const SelectSlot = ({ appointmentData, handleSlotData, appointmentStep, proceedTo }) => {
    const { location, date = new Date(), slot } = appointmentData;
    useEffect(() => {
        handleSlotData({
            date: new Date(date).toISOString(),
            location: location || appointmentLocations[0],
            slot: slot || slotsData["Morning"][0]
        });
    }, []);
    return (
        <>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-8 md:space-y-0 my-8">
                <div className="basis-2/5 border shadow-cardshadow1 border-background4 rounded-md self-start">
                    <div className="text-lg text-text2 font-bold p-8">
                        Select a date
                    </div>
                    <div className="border-t border-background4" />
                    <div className="bg-white p-6 rounded-md">
                        <CustomCalender
                            calendarType="US"
                            onChange={(value) => {
                                handleSlotData({
                                    date: value.toISOString()
                                });
                            }}
                            value={new Date(date)}
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
                        {
                            appointmentLocations.map((appointmentLocation) => (
                                <button
                                    key={appointmentLocation}
                                    onClick={() => handleSlotData({
                                        location: appointmentLocation
                                    })}
                                    className={
                                        classNames(
                                            "basis-1/2 rounded-md border border-background8 text-text1 flex items-center justify-start p-2 hover:border-primary1",
                                            location === appointmentLocation ? "bg-background12" : ""
                                        )
                                    }>
                                    {location === appointmentLocation
                                        ? <BiRadioCircleMarked className="text-primary1 mr-2" />
                                        : <BiRadioCircle className="mr-2" />}
                                    {appointmentLocation}
                                </button>
                            ))
                        }
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
                                        slotsData[timeOfDay].map((slotTime) => (
                                            <button
                                                onClick={() => handleSlotData({ slot: slotTime })}
                                                key={slotTime}
                                                className={classNames(
                                                    "border border-background8 rounded-md text-text2 py-2 px-4 m-2 hover:border-primary1",
                                                    slot === slotTime ? "bg-background12" : "")}>
                                                {slotTime}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-2 my-8">

                <button
                    onClick={() => proceedTo(appointmentStepsArray[Number(appointmentStep.id - 2)])}
                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-start bg-white text-primary1 border border-primary1 shadow-buttonshadow2 hover:bg-background7"
                >
                    <HiArrowNarrowLeft />&nbsp;&nbsp;Back
                </button>
                <button
                    onClick={() => proceedTo(appointmentStepsArray[appointmentStep.id])}
                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-end bg-primary1 text-white shadow-buttonshadow hover:bg-background2"
                >
                    Next&nbsp;&nbsp;<HiArrowNarrowRight />
                </button>
            </div>
        </>
    );
};

export default SelectSlot;
