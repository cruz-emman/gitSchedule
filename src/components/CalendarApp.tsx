import { cn } from "@/lib/utils";
import { generateDate, months } from "@/util/Calendar";
import dayjs from "dayjs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Separator } from "./ui/separator";
import ScheduleButton from "./ScheduleButton";
import { CardRequestSchedule } from "./CardRequestSchedule";
import { Link } from "react-router-dom";
import useDatePicker from "@/util/store";

export default function CalendarApp() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const {setDateOfEventPicker} = useDatePicker()

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);


  return (
    <div className="flex w-full h-screen ">
      <div className="flex items-center justify-start w-full h-full gap-12 ">
        <div className="flex flex-col w-1/2 h-full gap-5 ">
          <div className="flex items-center rounded-lg ">
            <div className="w-full">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold text-primary-light">
                  {months[today.month()]}, {today.year()}
                </h1>
                <div className="flex items-center gap-5">
                  <ArrowLeft
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setToday(today.month(today.month() - 1))}
                  />
                  <h1
                    className="font-semibold cursor-pointer text-secondary-light"
                    onClick={() => setToday(currentDate)}
                  >
                    Today
                  </h1>
                  <ArrowRight
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setToday(today.month(today.month() + 1))}
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-7 text-gray-500">
                {days.map((day, index) => {
                  return (
                    <h1
                      key={index}
                      className="grid text-sm font-semibold border-t h-14 place-content-center"
                    >
                      {day}
                    </h1>
                  );
                })}
              </div>
              <div className="grid w-full h-full grid-cols-7">
                {generateDate(today.month(), today.year()).map(
                  ({ date, currentMonth, today }, index) => {
                    return (
                      <div
                        key={index}
                        className="grid border-t h-14 place-content-center"
                      >
                        <h1
                          className={cn(
                            currentMonth ? "" : "text-gray-400",
                            today ? "bg-red-500 text-white" : "",
                            selectDate.toDate().toDateString() ===
                              date.toDate().toDateString()
                              ? "bg-black text-white"
                              : "",
                            "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all"
                          )}
                          onClick={() => setSelectDate(date)}
                        >
                          {date.date()}
                        </h1>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-start justify-start h-full ">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-gray-400 ">
                SCHEDULE AN APPOINTMENT
              </h1>
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/appointment" 
                onClick={() => setDateOfEventPicker(selectDate.toDate().toDateString())}>
                  <ScheduleButton 
                      title="Schedule" 
                      date={selectDate.toDate().toDateString()}
                      
                      />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full  rounded-tl-[100px]  p-16 gap-4">
          <h1 className="text-2xl font-semibold text-gray-400 ">
            Schedule for{" "}
            <span className="font-bold text-black">
              {selectDate.toDate().toDateString()}
            </span>
          </h1>

          <div className="flex flex-col h-full mt-5">
            <div className="flex flex-col flex-1 w-full gap-2 ">
              <h1 className="text-lg font-semibold text-gray-5 00">Dry Run</h1>
              <div className="flex flex-wrap gap-2">
                <CardRequestSchedule />
                <CardRequestSchedule />
                <CardRequestSchedule />
                <CardRequestSchedule />
                <CardRequestSchedule />
                <CardRequestSchedule />
              </div>
            </div>
            <div className="flex flex-col flex-1 w-full gap-2 ">
              <h1 className="text-lg font-semibold text-gray-5">
                Event Today
              </h1>
              <div className="flex flex-wrap gap-2">
                <CardRequestSchedule />
                <CardRequestSchedule />
                <CardRequestSchedule />

                <CardRequestSchedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


