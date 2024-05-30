import React from "react";
import { Calendar, DateValue } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
export default function ClubCalendar() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);
  return (
    <div className="absolute right-0 z-50">
      <Calendar
        aria-label="Date (Controlled Focused Value)"
        focusedValue={focusedDate}
        value={defaultDate}
        onFocusChange={setFocusedDate}
        date-focused={focusedDate}
        style={{
          accentColor: "#76ABAE",
          color: "#070F2B",
          backgroundColor: "#76ABAE",
          colorScheme: "dark",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, 0.5)",
        }}
      />
    </div>
  );
}
