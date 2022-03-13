import Calendar from "../Calendar";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import { FiChevronRight, FiChevronLeft, FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useMemo } from "react";
import classNames from "classnames";
import { appointmentStepsArray, appointmentLocations, slotsData } from "../../constants";
import { add, toDate, isAfter } from "date-fns";

const filterDayTime = (dayTime, date) => {
    if (new Date(date).getTime() > new Date().getTime()) {
        return true;
    }
    const timeOfDay = new Date(date);
    if (dayTime === "Morning") {
        timeOfDay.setHours(12, 0, 0);
        if (isAfter(new Date(date), timeOfDay)) {
            return false;
        }
        return true;
    }
    return true;
};

const filterTime = ({ hours, minutes }, date) => {
    if (new Date(date).getTime() > new Date().getTime()) {
        return true;
    }
    const timeOfDay = new Date(date);
    timeOfDay.setHours(hours, minutes, 0);
    if (isAfter(new Date(date), timeOfDay)) {
        return false;
    }
    return true;
};

const SelectSlot = ({ appointmentData, handleSlotData, appointmentStep, proceedTo }) => {
    const {
        location = appointmentLocations.IN_PERSON,
        date = new Date().toISOString(),
        slot
    } = appointmentData;
    const filteredSlotsData = useMemo(() => slotsData
        .filter((slotData) => filterDayTime(slotData[0], date))
        .map(timeOfDaySlots => {
            const filteredTimeOfDaySlots = timeOfDaySlots[1].filter((timeData) => filterTime(timeData, date));
            return [timeOfDaySlots[0], filteredTimeOfDaySlots];
        }), [date]);
    useEffect(() => {
        handleSlotData({
            date,
            location
        });
    }, []);
    useEffect(() => {
        handleSlotData({
            slot: filteredSlotsData[0][1][0]
        });
    }, [date]);
    return (
        <>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-8 md:space-y-0 my-8">
                <div className="basis-2/5 border shadow-cardshadow1 border-background4 rounded-md self-start">
                    <div className="text-lg text-text2 font-bold p-8">
                        Select a date
                    </div>
                    <div className="border-t border-background4" />
                    <div className="bg-white p-6 rounded-md">
                        <Calendar
                            calendarType="US"
                            onChange={(value) => {
                                handleSlotData({
                                    date: value.toISOString()
                                });
                            }}
                            value={new Date(date)}
                            minDate={new Date()}
                            maxDate={toDate(add(new Date(), { days: 60 }))}
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
                            Object.keys(appointmentLocations).map((appointmentLocation) => (
                                <button
                                    key={appointmentLocations[appointmentLocation]}
                                    onClick={() => handleSlotData({
                                        location: appointmentLocations[appointmentLocation]
                                    })}
                                    className={
                                        classNames(
                                            "basis-1/2 rounded-md border border-background8 text-text1 flex items-center justify-start p-2 hover:border-primary1",
                                            location === appointmentLocations[appointmentLocation] ? "bg-background12" : ""
                                        )
                                    }>
                                    {location === appointmentLocations[appointmentLocation]
                                        ? <BiRadioCircleMarked className="text-primary1 mr-2" />
                                        : <BiRadioCircle className="mr-2" />}
                                    {appointmentLocations[appointmentLocation]}
                                </button>
                            ))
                        }
                    </div>
                    <div className="text-md text-text2 font-bold mt-8">Choose a Slot</div>
                    {filteredSlotsData.map((timeOfDaySlots) => (
                        <div key={timeOfDaySlots[0]} className="mt-4">
                            <div className="flex items-center space-x-2 text-md text-text2 font-semibold">
                                {timeOfDaySlots[0] === "Morning" ? <FiSun className="text-background6" /> : <FiMoon className="text-background6" />}<div>{timeOfDaySlots[0]}</div>
                            </div>
                            <div className="border border-background8 my-4" />
                            <div className="flex flex-wrap justify-start mb-10">
                                {timeOfDaySlots[1].length > 0 ? timeOfDaySlots[1].map((slotTime) => (
                                    <button
                                        onClick={() => handleSlotData({ slot: slotTime })}
                                        key={slotTime.text}
                                        className={classNames(
                                            "border border-background8 rounded-md text-text2 py-2 px-4 m-2 hover:border-primary1",
                                            slot?.text === slotTime.text ? "bg-background12" : "")}>
                                        {slotTime.text}
                                    </button>
                                )) : "No Slots Available"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-2 my-8">
                <button
                    onClick={() => proceedTo(appointmentStepsArray[Number(appointmentStep.id - 2)])}
                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-start bg-white text-primary1 border border-primary1 shadow-buttonshadow2 hover:bg-background7 hover:shadow-cardshadow"
                >
                    <HiArrowNarrowLeft />&nbsp;&nbsp;Back
                </button>
                <button
                    disabled={ !date || !location || !slot }
                    onClick={() => proceedTo(appointmentStepsArray[Number(appointmentStep.id)])}
                    className="rounded-full font-bold py-4 px-10 flex items-center justify-self-end bg-primary1 text-white shadow-buttonshadow hover:bg-background2 hover:shadow-lg hover:shadow-primary1 disabled:opacity-50"
                >
                    Next&nbsp;&nbsp;<HiArrowNarrowRight />
                </button>
            </div>
        </>
    );
};

export default SelectSlot;
